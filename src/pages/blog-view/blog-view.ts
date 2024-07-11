/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { customElement, property, state } from "lit/decorators.js";
import { consume } from "@lit/context";
import { RequestsModel, IRequestsContext } from "../../services/api/requestsModel";
import { IBlogContentItem, IBlogLikeItem } from "../../types/blogPost";
import { XFRouterModel } from "../../utils/xf-router";
import { formatDateOrTime } from "../../utils/dateTimeM";
import { repeat } from "lit/directives/repeat.js";
import { showOpacityContainer } from "../../components/dom";
import { when } from "lit/directives/when.js";
import { createContentError } from "../../components/ui/elements/contentError/contentError";
import loadingGifImage from "../../public/assets/loaderimage.gif";
import "../../components/ui/elements/blogLikeitem/blogLikeItem";
import "../../components/ui/elements/notification/notification";
import { updatePageTitleFromBlog } from "../../services/api/updateTitle";
import "./media/blogView.css";
import { OpenLit } from "../../components/ui/base/OpenLit/OpenLit";

/**
 * The View is Viewing A blog and all its content
 */

@customElement("xf-blog-view")
export class BlogView extends OpenLit {
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
            url: loadingGifImage,
        },
        readtime: {
            text: "Loading...",
        },
        slug: "...patkimera",
        title: "Growing and Living A better Life",
        description: "...",
    };

    override firstUpdated() {
        this.intializeBlogView();
    }

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

        showOpacityContainer(this);
    }

    private async validateBlogDataAsync(data: IBlogContentItem): Promise<string> {
        return new Promise((c, e) => {
            /**
             * The promise will complete on the first available error
             */

            //check image url presence
            if (!(data.image.url.length > 0)) {
                c("Error Fetching (ImageAsset)");
            }
        });
    }

    /**
     * Initialize The Blog View and All its data
     */

    private intializeBlogView() {
        this.requestsContext.getContentDataForBlog(this.getLocationParams()).then((data) => {
            let receivedData = data;
            this.validateBlogDataAsync(receivedData).then((v) => {
                if (v.length > 0) {
                    createContentError(v);
                }
            });
            this.blogContentData = receivedData;
            updatePageTitleFromBlog(receivedData.title);
            document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            this.blogAsideViewItems = this.requestsContext.getContentDataAsideBlogs(this.getLocationParams());
        });
    }

    protected override render(): unknown {
        return html`
            <div class="marginal-seat-blog-view">
                <div class="split-view">
                    <div class="view-1 view-area">
                        <div class="blog-view-container">
                            <header>
                                <h2 class="blog-title">${this.blogContentData.title}</h2>
                            </header>
                            <div class="meta-data">
                                <div class="update-time">${formatDateOrTime(this.blogContentData.createdAt)}</div>
                                <div class="read-time" title="Read time">${this.blogContentData.readtime.text}</div>
                            </div>
                            <main class="main-content-area">
                                ${when(
                                    this.blogContentData.image.url != "blog-image-section",
                                    () => {
                                        return html`
                                            <img
                                                alt=${this.blogContentData.title}
                                                fetchpriority="high"
                                                decoding="async"
                                                src=${this.blogContentData.image.url}
                                                class="blog-item-image"
                                            />
                                        `;
                                    },
                                    () => {
                                        return html` <xf-spinner isSpinning></xf-spinner> `;
                                    }
                                )}

                                <div class="blog-content-advert-section">
                                    <div class="rendered-html-content">
                                        ${unsafeHTML(this.blogContentData.content.html)}
                                    </div>
                                    <div class="desktop-mobile-ads-container">
                                        <script
                                            async
                                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7690402186466228"
                                            crossorigin="anonymous"
                                        ></script>
                                        <!-- Diod -->
                                        <ins
                                            class="adsbygoogle"
                                            style="display:block"
                                            data-ad-client="ca-pub-7690402186466228"
                                            data-ad-slot="8459763032"
                                            data-ad-format="auto"
                                            data-full-width-responsive="true"
                                        ></ins>
                                        <script>
                                            (adsbygoogle = window.adsbygoogle || []).push({});
                                        </script>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div class="view-2 view-area">
                        <div class="wrapper">
                            <div class="like-items-title">You Will Also LIke</div>
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

                                <div class="desktop-ads-container">
                                    <script
                                        async
                                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7690402186466228"
                                        crossorigin="anonymous"
                                    ></script>
                                    <!-- Diod -->
                                    <ins
                                        class="adsbygoogle"
                                        style="display:block"
                                        data-ad-client="ca-pub-7690402186466228"
                                        data-ad-slot="8459763032"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"
                                    ></ins>
                                    <script>
                                        (adsbygoogle = window.adsbygoogle || []).push({});
                                    </script>
                                </div>
                                <div class="desktop-ads-container">
                                    <script
                                        async
                                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7690402186466228"
                                        crossorigin="anonymous"
                                    ></script>
                                    <ins
                                        class="adsbygoogle"
                                        style="display:block"
                                        data-ad-format="autorelaxed"
                                        data-ad-client="ca-pub-7690402186466228"
                                        data-ad-slot="4825207146"
                                    ></ins>
                                    <script>
                                        (adsbygoogle = window.adsbygoogle || []).push({});
                                    </script>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
