/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Server side (Component);
 */



import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { formatDateOrTime } from "../../../../utils/dateTimeM";

@customElement("xf-post-banner-item")
export class PostBannerItem extends LitElement {

    @property({ attribute: false }) slug: string = "";
    @property({ attribute: false }) postTitle: string = "";
    @property({ attribute: false }) postReadTime: string = "";
    @property({ attribute: false }) postUpdateTime: string = "";

    static override get styles() {
        return css`
            .post-banner-item-link {
                text-decoration: none;
                color: #fff;
                text-align: center;
            }

            .post-title {
                font-size: 45pt;
                margin-bottom: 8px;
            }

            .details-container {
                width: 100%;
                display: flex;
                justify-content: center;
                font-family: 14pt;
                color: #c7c7c7;
                font-display: auto;
            }

            .details-container > div:nth-child(1)::after {
                content: "/";
                margin: 0px 8px 0px 8px;
            }
            @media(max-width:933px){
                .post-title {
                    font-size:40pt;
                }
            }
            @media(max-width:735px){
                .post-title {
                    font-size:35pt;
                }
            }
            @media(max-width:535px){
                .post-title {
                    font-size:30pt;
                }
            }
            @media(max-width:481px){
                .post-title {
                    font-size:25pt;
                }

                .details-container{
                    font-size:12pt !important;
                }
            }

            @media(max-width:391px){
                .post-title {
                    font-size:18pt;
                }

                .details-container{
                    font-size:10pt !important;
                }
            }
        `;
    }

    protected override render(): unknown {
        return html`
            <a aria-label=${this.postTitle} href=${`/blog/${this.slug}`} class="post-banner-item-link">
                <div class="post-banner-item">
                    <div class="post-title">${this.postTitle}</div>
                    <div class="details-container">
                        <div class="date-time-update">${formatDateOrTime(this.postUpdateTime)}</div>
                        <div class="read-time">${this.postReadTime}</div>
                    </div>
                </div>
            </a>
        `;
    }
}
