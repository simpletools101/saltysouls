/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement,css,html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { formatDateOrTime } from "../../../../../lib/controllers/dateTimeM";

@customElement('xf-post-banner-item-s')
export class PostBannerItem extends LitElement {

    @property() slug: string = "";
    @property() postTitle: string = "";
    @property() postReadTime: string = "";
    @property() postUpdateTime: string = "";

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
            }

            .details-container > div:nth-child(1)::after {
                content: "/";
                margin: 0px 8px 0px 8px;
            }
        `;
    }

    protected override render(): unknown {
        return html`
            <a href=${`/blog/${this.slug}`} class="post-banner-item-link">
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