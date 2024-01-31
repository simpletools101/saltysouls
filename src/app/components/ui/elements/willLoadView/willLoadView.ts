/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import "../../base/spinner";

@customElement("xf-will-load")
export class WillLoadView extends LitElement {
    @property({ type: Boolean, attribute: false }) willLoad: boolean = false;
    @property({ type: Boolean, attribute: false }) isVisible: boolean = true;

    static override get styles() {
        return css`
            .spinner-container {
                height: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                width: 100%;
            }
            .spinner-container .load-more-control {
                height: 50px;
                width: 160px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                background-color: #000;
                color: #fff;
                margin-top: 15px;
                border: 2px solid #000;
                transition: all 0.3s;
                cursor: pointer;
                font-size: 13pt;
                font-weight: 300;
            }

            .spinner-container .load-more-control:hover {
                color: #000;
                border-color: #000;
                background-color: transparent;
            }
        `;
    }

    override updated() {
        if (!this.isVisible) {
            this.style.display = "none";
        }
    }
    private dispatchLoadSequenceEvent() {
        this.dispatchEvent(new Event("xf-load-items"));
    }

    protected override render(): unknown {
        return html`
            <div
                class="spinner-container"
                style=${styleMap({
                    display: this.isVisible ? "flex" : "none",
                })}
            >
                <xf-make-button
                    style=${styleMap({
                        display: !this.willLoad ? "flex" : "none",
                    })}
                    @xf-key-tap=${this.dispatchLoadSequenceEvent}
                    class="load-more-control"
                    aria-label="Load more articles"
                    title="Load more articles"
                    >Load More</xf-make-button
                >
                <xf-spinner
                    style=${styleMap({
                        display: this.willLoad ? "block" : "none",
                    })}
                    .isSpinning=${this.willLoad}
                ></xf-spinner>
            </div>
        `;
    }
}
