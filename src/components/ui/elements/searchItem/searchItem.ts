/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { formatDateOrTime } from "../../../../utils/dateTimeM";

@customElement("xf-search-item")
export class SearchItem extends LitElement {
    @property({ attribute: false }) itemTitle: string = "";
    @property({ attribute: false }) itemCreatedAt: string = "";
    @property({ attribute: false }) itemReadtime: string = "";
    @property({ attribute: false }) itemSlug: string = "";

    static override styles = css`
        :host {
            display: block;
            width: 100%;
            margin: 25px 0px 25px 0px;
        }

        .link-container {
            display: block;
            width: 100%;
            height: fit-content;
            border: 1px solid rgb(119, 110, 110);
            margin-right: 10px;
        }
        .link-container .container {
            padding: 20px;
        }

        .container .title-section {
            color: rgb(51, 52, 53);
            font-size: 24px;
            margin-bottom: 8px;
        }
        .container .title-section:hover {
            color: var(--turquoise);
        }

        .container .meta-data {
            display: flex;
            color: #00000079;
            font-size: 16px;
            margin-top: 5px;
        }
        .meta-data > div:nth-child(1)::after {
            content: "/";
            margin: 0px 10px 0px 10px;
        }

        /* @media(max-width:646px){
            .link-container .container {}
        } */
    `;

    protected override render(): unknown {
        return html`
            <div class="link-container">
                <div class="container">
                    <a
                        href=${`/blog/${this.itemSlug}`}
                        arial-label=${this.itemTitle}
                        class="title-section"
                        >${this.itemTitle}</a
                    >
                    <div class="meta-data">
                        <div class="update-time" aria-label="Created Time">
                            ${formatDateOrTime(this.itemCreatedAt)}
                        </div>
                        <div class="read-time">${this.itemReadtime}</div>
                    </div>
                </div>
            </div>
        `;
    }
}
