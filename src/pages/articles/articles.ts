/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { consume } from "@lit/context";
import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { IResourcesContext, IResources } from "../../services/api/resourcesContext";
import { IRequestsContext, RequestsModel } from "../../services/api/requestsModel";
import { IBlogPostCard } from "../../types/blogPost";
import { when } from "lit/directives/when.js";
import articlesPageImage from "../../public/assets/contentImages/articlespage.webp"

@customElement("xf-route-articles")
export class ArticlesRoute extends LitElement {
    /**s
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

    /**
     * Check if should show the LoadProgressItem
     */
    @state() willShowLoadProgress: boolean = false;

    override connectedCallback(): void {
        super.connectedCallback();
        this.initializeAllBlogsData();
    }

    /**
     * Initialize all The blog Data of the articles
     */
    private initializeAllBlogsData() {
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
                this.consumerBlogCardArray.push(...this.blogCardArticles.slice(this.startIndex, this.startIndex + 5));
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
        this.consumerBlogCardArray.push(...blogCardsData);

    }
    /**
     * Check if the copying can continue ie more cards are still in the host array and we can still copy more to
     * the consumer Array
     * @returns
     */
    private isMoreBlogCardDataAvailable() {
        return this.startIndex < this.blogCardArticles.length;
    }

    static override get styles() {
        return css`
            :host {
                display: block;
                width: 100%;
            }
            .view-1 {
                width: inherit;
            }
            .articles-section {
                display: grid;
                justify-items: center;
            }
        `;
    }

    override render() {
        return html`
            <div class="container">
                <div class="view-1">
                    <xf-route-banner
                        .imgSrc=${articlesPageImage}
                        .routeTitle=${"Articles"}
                        .routeStatement=${"Bringing forth the truth and helping you improve your day to day life"}
                    ></xf-route-banner>
                </div>
                <div class="view-2">
                    <xf-marginal-container>
                        ${when(
                            this.consumerBlogCardArray.length > 0,
                            () => {
                                return html`
                                    ${repeat(this.consumerBlogCardArray, (value) => {
                                        return html` <xf-blog-item-card .itemProps=${value}></xf-blog-item-card> `;
                                    })}
                                `;
                            },
                            () => {
                                return html` <xf-spinner isSpinning></xf-spinner> `;
                            }
                        )}
                        <xf-will-load
                            .isVisible=${this.isCopyingEnabled}
                            .willLoad=${this.willShowLoadProgress}
                            @xf-load-items=${this.requestMoreBlogCardsPreload}
                        ></xf-will-load>
                    </xf-marginal-container>
                </div>
            </div>
        `;
    }
}
