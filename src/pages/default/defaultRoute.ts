/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { IResourcesContext, IResources } from "../../services/api/resourcesContext";
import { IRequestsContext, RequestsModel } from "../../services/api/requestsModel";
import { consume } from "@lit/context";
import { repeat } from "lit/directives/repeat.js";
import { IBlogPostCard, IPostBanner } from "../../types/blogPost";
import { showOpacityContainer } from "../../components/dom";
import { when } from "lit/directives/when.js";
import defaultPageImage from "../../public/assets/contentImages/defaultRouteImage.webp"
import "./pch";

@customElement("xf-route-default")
export class DefaultRoute extends LitElement {
    /**
     * Get Access to Resources
     */
    @consume({ context: IResourcesContext })
    @property({ attribute: false })
    public resourcesContext!: IResources;

    /**
     *
     * Get access to the Requests Data
     */

    @consume({ context: IRequestsContext })
    @property({ attribute: false })
    public requestsContext!: RequestsModel;

    @property({ type: Array }) blogCardArticles: IBlogPostCard[] = [];
    @property({ type: Array }) bannerBlogCards: IPostBanner[] = [];
    /**
     * The consumer array that contains elements that are actuall shown to the View
     * This array gets the first Ten Elements and continously adds five more in a sequence
     * but if they are less than ten or equal ten they are all added
     *
     * ### This enables sequential loading (LOAD_MORE_FACILITY)
     */
    @property({ type: Array }) consumerBlogCardArray: IBlogPostCard[] = [];

    /**
     * This is used to make a check on the HostArray(requestsContextsArray)
     */
    @property({ type: Boolean }) private isCopyingEnabled: boolean = false;
    private startIndex: number = 0;

    @state() isCarouselSliderActive: boolean = false;

    /**
     * Check if should show the LoadProgressItem
     */
    @state() willShowLoadProgress: boolean = false;



    override connectedCallback(): void {
        super.connectedCallback();
        this.initializeAllBlogsData();
        showOpacityContainer(this);
    }

    /**
     * Initialize All Blogs Data for the default Route;
     */

    private initializeAllBlogsData() {
        this.requestsContext.__bannerBlogCardsPromise
            .__cowait()
            .then((data) => {
                this.bannerBlogCards = data;
                this.isCarouselSliderActive = true;
            });
        this.requestsContext.__articleCardsPromise.__cowait().then((data) => {
            let articleCards = data;
            this.blogCardArticles = data;
            this.createInitialDataLoadForElements(articleCards);
        });
    }

    /**
     * Show the Spinner Load for a short time and then Hide it
     * to a give the impression of loading items
     * @returns
     */

    private createIntervalLoaderSequence() {
        this.willShowLoadProgress = true;
        return new Promise<void>((c, e) => {
            setTimeout(() => {
                this.willShowLoadProgress = false;
                c();
            }, 2500);
        });
    }

    /**
     * Called to Load More BlogCards from the hostArray to the consumerArrry
     */

    private requestMoreBlogCardsPreload() {
        this.createIntervalLoaderSequence().then(() => {
            if (this.isMoreBlogCardDataAvailable()) {
                this.consumerBlogCardArray.push(
                    ...this.blogCardArticles.slice(
                        this.startIndex,
                        this.startIndex + 5
                    )
                );
                this.startIndex += 5;
            } else {
                this.isCopyingEnabled = false;
            }
        });
    }

    /**
     * Try to initially load the first ten items from the host Array to the consumer array
     * Preferably the first Ten and then try to initialise a sequence where we copy the first ten elements
     * and then keep adding five , five elements until the last index of the host array is reached
     */
    private createInitialDataLoadForElements(blogCardsData: IBlogPostCard[]) {
        if (blogCardsData.length <= 10) {
            this.consumerBlogCardArray.push(...blogCardsData);
        } else {
            this.isCopyingEnabled = true;
            this.consumerBlogCardArray.push(
                ...blogCardsData.slice(this.startIndex, this.startIndex + 10)
            );
            this.startIndex += 10;
        }
    }

    /**
     * Check if the copying can continue ie more cards are still in the host array and we can still copy more to
     * the consumer Array
     * @returns
     */
    private isMoreBlogCardDataAvailable() {
        return this.startIndex < this.blogCardArticles.length;
    }

    public static override get styles() {
        return css`
            :host {
                width: 100%;
                opacity: 0;
                --banner-container-height: 550px;
            }

            .container {
                width: 100%;
            }
            .container .wrapper {
                width: 100%;
            }
            .banner-container {
                width: 100%;
                height: var(--banner-container-height);
            }

            .articles-container {
                width: 100%;
            }

            .articles-container .container-title {
                height: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .articles-container .container-title .main-title {
                color: var(--turquoise);
                text-transform: sentencecase;
                font-size: 18pt;
                font-weight: bold;
                color:#2f605d;
                height: fit-content;
            }

            .spinner-container {
                width: 100px;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .articles-container .articles-section {
                display: grid;
                justify-items: center;
            }

            .main-section .view-1 {
                margin-top: 100px;
            }

            .post-banner-item-container {
                height: 500px;
            }
            .spinner-item-container {
                height:500px;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .post-banner-item-wrapper {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            @media (max-width: 914px) {
                .articles-container .container-title {
                    height: 70px !important;
                }
            }

            @media (max-width: 1047px) {
                .main-section .view-1 {
                    margin-top: 50px;
                }
            }
            @media (max-width: 1009px) {
                .main-section .view-1 {
                    margin-top: 30px;
                }
            }
            @media (max-width: 568px) {
                .main-section .view-1 {
                    margin-top: 0px;
                }
            }
            @media (max-width: 833px) {
                .post-banner-item-container {
                    height: 420px;
                }
                .spinner-item-container{
                    height: 420px;
                }
                :host {
                    --banner-container-height: 450px;
                }
            }

            @media (max-width: 433px) {
                .post-banner-item-container {
                    height: 350px;
                }
                .spinner-item-container {
                    height: 350px;
                }
                :host {
                    --banner-container-height: 400px;
                }
            }
        `;
    }

    protected override render(): unknown {
        return html`
            <div class="container">
                <div class="wrapper">
                    <div class="banner-container">
                        <xf-patch-background
                            .patchImageSource=${defaultPageImage}
                        >
                            ${when(this.bannerBlogCards.length > 0, () => {
                                return html`
                                    <xf-carousel
                                        .shouldInitialize=${this
                                            .isCarouselSliderActive}
                                    >
                                        ${repeat(
                                            this.bannerBlogCards,
                                            (item) => {
                                                return html`
                                                    <div
                                                        class="post-banner-item-container"
                                                    >
                                                        <div
                                                            class="post-banner-item-wrapper"
                                                        >
                                                            <xf-post-banner-item
                                                                .slug=${item.slug}
                                                                .postTitle=${item.title}
                                                                .postReadTime=${item
                                                                    .readtime
                                                                    .text}
                                                                .postUpdateTime=${item.createdAt}
                                                            ></xf-post-banner-item>
                                                        </div>
                                                    </div>
                                                `;
                                            }
                                        )}
                                    </xf-carousel>
                                `;
                            },()=>{
                                return html`
                                    <div class="spinner-item-container">
                                        <xf-spinner isSpinning></xf-spinner>
                                    </div>
                                `
                            })}
                        </xf-patch-background>
                    </div>
                    <div class="main-section">
                        <xf-marginal-container>
                            <div class="view-1">
                                <xf-common-quote></xf-common-quote>
                            </div>
                            <div class="view-2">
                                <div class="articles-container">
                                    <div class="container-title">
                                        <div class="main-title">
                                            ~Latest Articles~
                                        </div>
                                    </div>
                                    <div class="articles-section">
                                        ${when(
                                            this.consumerBlogCardArray.length >
                                                0,
                                            () => {
                                                return html`
                                                    ${repeat(
                                                        this
                                                            .consumerBlogCardArray,
                                                        (value) => {
                                                            return html`
                                                                <xf-blog-item-card
                                                                    .itemProps=${value}
                                                                ></xf-blog-item-card>
                                                            `;
                                                        }
                                                    )}
                                                `;
                                            },
                                            () => {
                                                return html`
                                                    <div
                                                        class="spinner-container"
                                                    >
                                                        <xf-spinner
                                                            isSpinning
                                                        ></xf-spinner>
                                                    </div>
                                                `;
                                            }
                                        )}

                                        <xf-will-load
                                            .isVisible=${this.isCopyingEnabled}
                                            .willLoad=${this
                                                .willShowLoadProgress}
                                            @xf-load-items=${this
                                                .requestMoreBlogCardsPreload}
                                        ></xf-will-load>
                                    </div>
                                </div>
                            </div>
                        </xf-marginal-container>
                    </div>
                </div>
            </div>
        `;
    }
}
