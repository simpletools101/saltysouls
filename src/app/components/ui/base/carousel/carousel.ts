/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Client side (Component);
 */

import { LitElement, html, css, PropertyValues } from "lit";
import {
    customElement,
    property,
    state,
    queryAssignedElements,
} from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import {
    AnimationTuple,
    SLIDE_LEFT_IN,
    SLIDE_LEFT_OUT,
    SLIDE_RIGHT_IN,
    SLIDE_RIGHT_OUT,
    BOOTSTRAP_CHEVRON_LEFT,
    BOOTSTRAP_CHEVRON_RIGHT,
} from "./carouselContants";

@customElement("xf-carousel")
export class XFCarousel extends LitElement {
    // Assume this is always a valid slide index.
    @property({ type: Number }) slideIndex = 0;
    @state() private containerHeight = 0;
    @queryAssignedElements() private readonly slideElements!: HTMLElement[];

    @property({ type: Boolean }) shouldInitialize: boolean = false;
    @property({ type: Boolean }) didInitialize: boolean = false;

    private autoPlayIntervalId: unknown = undefined;

    static override styles = css`
        ::slotted(.slide-hidden) {
            display: none;
        }

        /** So the elements all overlap */
        ::slotted(*) {
            position: absolute;
            padding: 1em;
        }

        :host {
            display: flex;
            flex-direction: row;
            align-items: center;
            min-width: 200px;
        }

        #container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            margin: 0 12px;
            height: fit-content;
            /* padding: 1em; */
            overflow: hidden;
            position: relative;
        }
        .cr-1 {
            margin-left: 8px;
        }
        .cr-2 {
            margin-right: 8px;
        }

        .carousel-btn {
            cursor: pointer;
            height: 40px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(72, 72, 72, 0.24);
            border-radius: 5px;
            color: #fff;
        }
        .carousel-btn:hover {
            background-color: rgba(72, 72, 72, 0.77);
        }
        .carousel-btn:active {
            background-color: rgba(134, 134, 134, 0.77);
        }
    `;

    /**
     * Return slide index in the range of [0, slideElement.length)
     */
    get wrappedIndex(): number {
        return wrapIndex(this.slideIndex, this.slideElements.length);
    }

    override render() {
        const containerStyles = {
            height: `${this.containerHeight}px`,
        };

        return html`<xf-make-button
                style=${styleMap({
                    display: this.shouldInitialize ? "flex" : "none",
                })}
                class="carousel-btn cr-1"
                @xf-key-tap=${this.createNavigatePreviousSlideKeyEvent}
            >
                ${BOOTSTRAP_CHEVRON_LEFT}
            </xf-make-button>

            <div
                part="container"
                id="container"
                style="${styleMap(containerStyles)}"
            >
                <slot></slot>
            </div>

            <xf-make-button
                style=${styleMap({
                    display: this.shouldInitialize ? "flex" : "none",
                })}
                class="carousel-btn cr-2"
                @xf-key-tap=${this.createNavigateNextSlideKeyEvent}
            >
                ${BOOTSTRAP_CHEVRON_RIGHT}
            </xf-make-button>`;
    }

    private ____intialize____(willInitialize: boolean) {
        if (willInitialize) {
            this.containerHeight = getMaxElHeight(this.slideElements);
            this.initializeSlides();
            this.initializeAutoPlayIntervalSlide();
            this.didInitialize = true;
        }
    }

    private initializeAutoPlayIntervalSlide() {
        this.autoPlayIntervalId = setInterval(() => {
            this.navigateToNextSlide();
        }, 3000);
    }

    private clearInterval() {
        clearInterval(this.autoPlayIntervalId! as number);
    }

    override updated(changedProperties: PropertyValues<this>): void {
        if (!this.didInitialize) {
            if (this.shouldInitialize) {
                this.____intialize____(true);
            }
        }

        // Not covered in the video, but if you want to drive animations from the
        // 'slideindex' attribute and property, we can calculate the animation in
        // the 'updated' lifecycle callback.

        if (this.didInitialize) {
            if (changedProperties.has("slideIndex")) {
                const oldSlideIndex = changedProperties.get("slideIndex");
                if (oldSlideIndex === undefined) {
                    return;
                }
                const isAdvancing = this.slideIndex > oldSlideIndex;

                if (isAdvancing) {
                    // Animate forwards
                    this.navigateWithAnimation(
                        1,
                        SLIDE_LEFT_OUT,
                        SLIDE_RIGHT_IN
                    );
                } else {
                    // Animate backwards
                    this.navigateWithAnimation(
                        -1,
                        SLIDE_RIGHT_OUT,
                        SLIDE_LEFT_IN
                    );
                }
            }
        }
    }

    navigateToNextSlide() {
        // Animation driven by the `updated` lifecycle.
        this.slideIndex += 1;
    }

    navigateToPrevSlide() {
        // Animation driven by the `updated` lifecycle.
        this.slideIndex -= 1;
    }

    private createNavigatePreviousSlideKeyEvent() {
        /**
         * When someone interupts the autoplay sequence lets clear the autoplay
         * and then restart it
         */
        this.clearInterval();
        this.navigateToPrevSlide();
        this.initializeAutoPlayIntervalSlide();
    }

    private createNavigateNextSlideKeyEvent() {
        this.clearInterval();
        this.navigateToNextSlide();
        this.initializeAutoPlayIntervalSlide();
    }
    private async navigateWithAnimation(
        nextSlideOffset: number,
        leavingAnimation: AnimationTuple,
        enteringAnimation: AnimationTuple
    ) {
        this.initializeSlides();
        const leavingElIndex = wrapIndex(
            this.slideIndex - nextSlideOffset,
            this.slideElements.length
        );
        const elLeaving = this.slideElements[leavingElIndex];
        showSlide(elLeaving);

        // Animate out current element
        const leavingAnim = elLeaving.animate(
            leavingAnimation[0],
            leavingAnimation[1]
        );

        // Entering slide
        const newSlideEl = this.slideElements[this.wrappedIndex];

        // Show the new slide
        showSlide(newSlideEl);

        // Teleport it out of view and animate it in
        const enteringAnim = newSlideEl.animate(
            enteringAnimation[0],
            enteringAnimation[1]
        );

        try {
            // Wait for animations
            await Promise.all([leavingAnim.finished, enteringAnim.finished]);

            // Hide the element that left
            hideSlide(elLeaving);
        } catch {
            /* Animation was cancelled */
        }
    }

    private initializeSlides() {
        for (let i = 0; i < this.slideElements.length; i++) {
            const slide = this.slideElements[i];
            slide.getAnimations().forEach((anim) => anim.cancel());
            if (i === this.wrappedIndex) {
                showSlide(slide);
            } else {
                hideSlide(slide);
            }
        }
    }
}

function getMaxElHeight(els: HTMLElement[]): number {
    return Math.max(0, ...els.map((el) => el.getBoundingClientRect().height));
}

function hideSlide(el: HTMLElement) {
    el.classList.add("slide-hidden");
}

function showSlide(el: HTMLElement) {
    el.classList.remove("slide-hidden");
}

function wrapIndex(idx: number, max: number): number {
    return ((idx % max) + max) % max;
}
