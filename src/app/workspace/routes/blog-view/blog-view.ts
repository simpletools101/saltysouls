/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { customElement, property, state } from "lit/decorators.js";
import { consume } from "@lit/context";
import { RequestsModel, IRequestsContext } from "../../context/requestsModel";
import { IBlogContentItem, IBlogLikeItem } from "../../../../types/blogPost";
import { XFRouterModel } from "../../../lib/controllers/xf-router";
import { formatDateOrTime } from "../../../lib/controllers/dateTimeM";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { HAS_ADVERTISEMENTS } from "../../../lib/controllers/globald";
import { showOpacityContainer } from "../../../components/dom";
import { when } from "lit/directives/when.js";
import { createRef, ref } from "lit/directives/ref.js";
import { MetaDataFrameManager } from "../../../lib/controllers/metaData";
import "../../../components/ui/elements/adsContainer/adsContainer";
import "../../../components/ui/elements/blogLikeitem/blogLikeItem";
import "../../../components/ui/elements/commentsModel/commentsModel";
import "../../../components/ui/elements/notification/notification";

/**
 * The View is Viewing A blog and all its content
 */

@customElement("xf-blog-view")
export class BlogView extends LitElement {
    /**
     * Comments Ref for the Comments Element to Navigate 
     */
    private _commentsRef = createRef<HTMLDivElement>();
    private get commentsElement() {
        return this._commentsRef!.value!;
    }

    /**
     * Used to update the Common Notification's Element
     */

    @state() commentsLabel: string = "";
    @state() commentsType: "error" | "success" = "success";
    /**
     *
     * Get access to the Requests Data
     */

    @consume({ context: IRequestsContext })
    @property({ attribute: false })
    public requestsContext!: RequestsModel;

    /**
     * Preload Data from requests Context
     * based on the slug
     * 
     * The BlogContentData Contains all the data for the blog
     * 
     * but we set random value to it to enable quick rendering
     */

    @property({ attribute: false }) blogContentData: IBlogContentItem = {
        comments: [],
        content: {
            html: "<p>Loading...</>",
        },
        createdAt: new Date().toUTCString(),
        id: "...",
        image: {
            url: "blog-image-section",
        },
        readtime: {
            text: "Loading...",
        },
        slug: "...saltysouls",
        title: "...",
        description: "...",
    };

    /**
     * Blog Aside Items
     */
    @property({ attribute: false }) blogAsideViewItems: IBlogLikeItem[] = [];

    /**
     * get current Location Params and Options
     * @returns
     */
    private getLocationParams() {
        return XFRouterModel.getRouterParamsAndOptions()!.params.slug! as string;
    }
    override connectedCallback(): void {
        super.connectedCallback();
        this.intializeBlogView();
        showOpacityContainer(this);
    }

    /**
     * Initialize The Blog View and All its data
     */

    private intializeBlogView() {
        this.requestsContext
            .getContentDataForBlog(this.getLocationParams())
            .then((data) => {
                this.blogContentData = data;
                this.blogAsideViewItems =
                    this.requestsContext.getContentDataAsideBlogs(
                        this.getLocationParams()
                    );
                this.preloadPageMetaData();
            });
    }

    private preloadPageMetaData() {
        MetaDataFrameManager.setMetaDataFrameForce({
            title: this.blogContentData.title,
            description: this.blogContentData.description,
        });
    }

    /**
     * A handler to listen for Notification Requests from the 
     * comments Model
     * @param event 
     */

    private onDidGetNotification(event: any) {
        this.commentsLabel = event.detail.message;
        this.commentsType = event.detail.type;
    }

    /**
     * used to scroll to the comments UI
     * Smoothly
     */

    private scrollIntoCommentsView() {
        this.commentsElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    static override get styles() {
        return css`
            :host {
                display: block;
                height: fit-content;
                width: 100%;
                transition: all 0.3s;
                opacity: 0;
            }
            .split-view {
                height: fit-content;
                width: 100%;
                display: grid;
                grid-gap: 20px;
                grid-template-columns: 2.5fr 1fr;
                margin-bottom: 100px;
                transition: all 0.3s;
            }

            .split-view > .blog-view-container {
                width: inherit;
                height: inherit;
                transition: all 0.3s;
            }
            .split-view .blog-view-container header {
                height: 90px;
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                margin-top: 20px;
                transition: all 0.3s;
            }

            .split-view .blog-view-container header h2 {
                font-size: 30pt;
                height: fit-content;
            }
            .blog-view-container > .meta-data {
                display: flex;
                color: #00000079;
            }
            .meta-data > div:nth-child(1)::after {
                content: "/";
                margin: 0px 10px 0px 10px;
            }
            .meta-data > div:nth-child(2)::after {
                content: "/";
                margin: 0px 10px 0px 10px;
            }

            .meta-data .comments-tl {
                cursor: pointer;
                text-decoration: none;
                color: #0000009e;
            }
            .blog-view-container img.blog-item-image {
                display: block;
                transition: all 0.3s;
                width: 100%;
                height: auto;

                margin-top: 30px;
            }
            .blog-view-container
                .main-content-area
                .blog-content-advert-section {
                margin-top: 28px;
            }

            .blog-content-advert-section xf-ads-container {
                margin-top: 5px;
                width: 100%;
                height: 150px;
                border: 1px solid red;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .marginal-seat {
                width: 85%;
                height: inherit;
                margin: auto;
                background-color: #fff;
                display: grid;
                justify-items: center;
            }
            .blog-content-advert-section .rendered-html-content {
                width: 100%;
                margin-top: 44px;
                font-size: 17px;
                color: #242424;
            }
            /**
                Rendererd HTMLConent
             */
            .blog-content-advert-section .rendered-html-content p {
                margin-top: 2.14em;
                margin-bottom: -0.46em;
                line-height: 32px;
                letter-spacing: -0.003em;
                color: rgb(36, 36, 36);
                font-weight: 400;
                font-size: 18px;
                font-style: normal;
            }
            .rendered-html-content strong,
            h1 {
                letter-spacing: -0.016em;
                line-height: 30px;
                margin-top: 1.95em;
                font-size: 24px;
                margin-bottom: -0.28em;
                font-weight: 600;
                font-style: normal;
                word-break: break-word;
                overflow-wrap: break-word;
            }
            .view-2 .wrapper {
                width: inherit;
                padding-left: 20px;
                height: 100% !important;
            }

            .view-2 .like-items-title {
                display: flex;
                align-items: center;
                justify-content: center;
                /* width:150px; */
                height: 30px;
                margin-top: 20px;
                margin-bottom: 20px;
                margin-right: 20px;
                color: #fff;
                background-color: #000;
                text-transform: uppercase;
                font-size: 15px;
                padding: 8px;
            }

            .view-2 .comments-section {
                width: 100%;
                height: fit-content;
            }

            /**
                media Queries
             */

            @media (max-width: 1295px) {
                .split-view .blog-view-container header h2 {
                    font-size: 25pt;
                    height: fit-content;
                }
            }

            @media (max-width: 1087px) {
                .split-view {
                    display: block;
                }
                .view-2 .wrapper {
                    padding-left:0px;
                }
                .view-2 .wrapper .items-container {
                    display:grid;
                    grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
                }
            }

            @media (max-width: 1087px) {
                .split-view {
                    display: block;
                }
                .view-2 .wrapper {
                    padding-left:0px;
                }
                .view-2 .wrapper .items-container {
                    display:grid;
                    grid-template-columns:auto auto auto;
                }
            }
            @media (max-width: 713px) {
                .split-view .blog-view-container header h2 {
                    font-size: 22pt;
                    height: fit-content;
                }
            }

            @media (max-width: 623px) {
                .split-view .blog-view-container header h2 {
                    font-size: 20pt;
                    height: fit-content;
                }
            }

            @media (max-width: 569px) {
                .split-view .blog-view-container header h2 {
                    font-size: 20pt;
                    height: fit-content;
                }
                .blog-view-container img.blog-item-image {
                    margin-top: 20px;
                }
                .blog-view-container > .meta-data {
                    font-size: 16px;
                }
            }

            @media (max-width: 569px) {
                .split-view .blog-view-container header {
                    margin-top: 25px;
                    margin-bottom: 20px;
                }
            }


            @media (max-width: 477px) {
                .split-view .blog-view-container header h2 {
                    font-size: 19pt;
                }
             
                .blog-view-container > .meta-data {
                    font-size: 15px;
                }
            }

            @media(max-width:385px){
                .blog-view-container img.blog-item-image {
                    width:310px;
                }
            }

        `;
    }

    protected override render(): unknown {
        return html`
            <div class="marginal-seat">
                <div class="split-view">
                    <div class="view-1 view-area">
                        <xf-comment-notification
                            .contentValue=${this.commentsLabel}
                            .type=${this.commentsType}
                        ></xf-comment-notification>
                        <div class="blog-view-container">
                            <header>
                                <h2 class="blog-title">
                                    ${this.blogContentData.title}
                                </h2>
                            </header>
                            <div class="meta-data">
                                <div class="update-time">
                                    ${formatDateOrTime(
                                        this.blogContentData.createdAt
                                    )}
                                </div>
                                <div class="read-time" title="Read time">
                                    ${this.blogContentData.readtime.text}
                                </div>
                                <xf-make-button
                                    @xf-key-tap=${this.scrollIntoCommentsView}
                                    class="comments-tl"
                                    >${this.blogContentData.comments.length}
                                    comments</xf-make-button
                                >
                            </div>
                            <main class="main-content-area">
                                ${when(
                                    this.blogContentData.image.url !=
                                        "blog-image-section",
                                    () => {
                                        return html`
                                            <img
                                                fetchpriority="high"
                                                decoding="async"
                                                src=${this.blogContentData.image
                                                    .url}
                                                class="blog-item-image"
                                            />
                                        `;
                                    },
                                    () => {
                                        return html`
                                            <xf-spinner isSpinning></xf-spinner>
                                        `;
                                    }
                                )}

                                <div class="blog-content-advert-section">
                                    <xf-ads-container
                                        style=${styleMap({
                                            display: HAS_ADVERTISEMENTS
                                                ? "flex"
                                                : "none",
                                        })}
                                        >Ads</xf-ads-container
                                    >
                                    <div class="rendered-html-content">
                                        ${unsafeHTML(
                                            this.blogContentData.content.html
                                        )}
                                    </div>
                                    <xf-ads-container
                                        style=${styleMap({
                                            display: HAS_ADVERTISEMENTS
                                                ? "flex"
                                                : "none",
                                        })}
                                        >Ads</xf-ads-container
                                    >
                                    <section
                                        class="comments-section"
                                        id="comments"
                                        ${ref(this._commentsRef)}
                                    >
                                        <xf-comments-model
                                            
                                            @xf-notification=${this
                                                .onDidGetNotification}
                                            .blogID=${this.blogContentData.id}
                                            .commentItems=${this.blogContentData
                                                .comments}
                                        ></xf-comments-model>
                                    </section>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div class="view-2 view-area">
                        <div class="wrapper">
                            <div class="like-items-title">
                                You Will Also LIke
                            </div>
                            <div class="items-container">
                                ${repeat(this.blogAsideViewItems, (item) => {
                                    return html`
                                        <xf-blog-like-item
                                            .imgSource=${item.image.url}
                                            .titleContent=${item.title}
                                            .linkSource=${`blog/${item.slug}`}
                                        ></xf-blog-like-item>
                                    `;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
