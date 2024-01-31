/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Client side (Component);
 */

import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IBlogPostCard } from "../../../../../types/blogPost";
import { formatDateOrTime } from "../../../../lib/controllers/dateTimeM";

@customElement("xf-blog-item-card")
export class BlogItemCard extends LitElement {
    @property({ attribute: false }) itemProps!: IBlogPostCard;

    static override get styles() {
        return css`
            :host {
                width: 65%;
            }
            .blog-initial-article {
                width: 100%;
                margin: 40px 0px 40px 0px;
                transition: all 0.3s;
            }

            .blog-initial-article header h2 {
                font-size: 33pt;
                margin-bottom: 10px;
                transition: all 0.3s;
                font-display: auto;
            }

            .blog-initial-article header h2 .entry-title-link {
                text-decoration: none;
                color: #000;

                font-display: auto;
            }

            .blog-initial-article header h2 .entry-title-link:hover {
                color: var(--turquoise);
            }

            .blog-initial-article header .meta-data {
                display: flex;
                color: #00000079;
                margin-bottom: 25px;
                font-size: 16px;
                font-display: auto;
            }

            .blog-initial-article header .meta-data > div:nth-child(1)::after {
                content: "/";
                margin: 0px 10px 0px 10px;
            }

            .blog-initial-article .entry-content {
                width: 100%;
            }
            .blog-initial-article .entry-content .entry-content-img {
                display: block;
                transition: all 0.3s;
                width: 100%;
                height: 450px;
                
                font-display: auto;
            }

            .blog-initial-article .entry-content .entry-content-img:hover {
                filter: grayscale(1);
            }
            .blog-initial-article .entry-content p {
                margin-top: 25px;
                margin-bottom: 25px;
                font-size: 17px;
                line-height: 30px;
                letter-spacing: -0.003em;
                width: 100%;
                color: #242424;
            }
            .blog-initial-article .entry-content .article-footer {
                width: 100%;
                height: fit-content;
            }

            .blog-initial-article
                .entry-content
                .article-footer
                .read-more-link {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 40px;
                border: 2px solid var(--turquoise);
                text-decoration: none;
                width: 150px;
                color: var(--turquoise);
                transition: all 0.3s;
                font-display: auto;
                font-size: 16px;
            }
            .blog-initial-article .entry-content .article-footer a:hover {
                color: #000;
                border-color: #000;
            }

            @media (max-width: 914px) {
                :host {
                    width: 70%;
                }
                .blog-initial-article {
                    margin: 20px 0px 20px 0px;
                }
                .blog-initial-article header h2 {
                    font-size: 30pt;
                }
            }

            @media (max-width: 894px) {
                :host {
                    width: 80%;
                }
            }
            @media (max-width: 788px) {
                :host {
                    width: 88%;
                }
                .blog-initial-article .entry-content .entry-content-img {
                    height: 400px;
                }

                .blog-initial-article .description {
                    overflow-y: hidden;
                }
            }
            @media (max-width: 720px) {
                :host {
                    width: 88%;
                }
                .blog-initial-article .entry-content .entry-content-img {
                    height: 350px;
                }
                .blog-initial-article header h2 {
                    font-size: 26pt;
                }

                .blog-initial-article header .meta-data {
                    font-size: 15px;
                }
                .blog-initial-article .description {
                    overflow-y: hidden;
                    font-size: 15px !important;
                }
                .blog-initial-article
                    .entry-content
                    .article-footer
                    .read-more-link {
                    width: 120px;
                    height: 38px;
                }
            }

            @media (max-width: 616px) {
                :host {
                    width: 88%;
                }
                .blog-initial-article .entry-content .entry-content-img {
                    height: 300px;
                }
                .blog-initial-article header h2 {
                    font-size: 24pt;
                }
                .blog-initial-article
                    .entry-content
                    .article-footer
                    .read-more-link {
                    width: 120px;
                    height: 38px;
                    font-size: 15px;
                }
            }

            @media (max-width: 568px) {
                .blog-initial-article .entry-content .entry-content-img {
                    height: 250px;
                }
                .blog-initial-article
                    .entry-content
                    .article-footer
                    .read-more-link {
                    width: 110px;
                    height: 38px;
                    font-size: 14px;
                }
            }

            @media (max-width: 360px) {
                .blog-initial-article header h2 {
                    font-size: 22pt;
                }
            }
        `;
    }

    protected override render(): unknown {
        return html`
            <article class="blog-initial-article">
                <header>
                    <h2 class="entry-title">
                        <a
                            aria-label=${this.itemProps.title}
                            class="entry-title-link"
                            href=${`/blog/${this.itemProps.slug}`}
                            >${this.itemProps.title}</a
                        >
                    </h2>
                    <div class="meta-data">
                        <div class="update-time">
                            ${formatDateOrTime(this.itemProps.createdAt)}
                        </div>
                        <div class="read-time">
                            ${this.itemProps.readtime.text}
                        </div>
                    </div>
                </header>
                <div class="entry-content">
                    <a href=${`/blog/${this.itemProps.slug}`}>
                        <img
                            fetchpriority="high"
                            decoding="async"
                            class="entry-content-img"
                            src=${this.itemProps.image.url}
                            alt=${this.itemProps.title}
                        />
                    </a>
                    <p class="description">${this.itemProps.description}</p>
                    <div class="article-footer">
                        <a
                            aria-label=${`Read More about ${this.itemProps.title}`}
                            class="read-more-link"
                            href=${`/blog/${this.itemProps.slug}`}
                            >Read More</a
                        >
                    </div>
                </div>
            </article>
        `;
    }
}
