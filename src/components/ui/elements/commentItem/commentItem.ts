/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("xf-comment-item")
export class CommentItem extends LitElement {
    @property() imgSource: string = "";
    @property({ attribute: false }) userName: string = "";
    @property({ attribute: false }) comment: string = "";
    @property({ attribute: false }) dateCreated: string = "";

    static override styles = css`
        :host {
            display:block;
            margin: 55px 0px 55px 0px;
        }
        .container {
            width: fit-content;
            height: fit-content;
        }
        .container .header {
            display: flex;
            height: fit-content;
        }
        .container .user-data {
            margin-left: 20px;
        }
        .container .user-data .user-name {
            color: #2c2c2c;
            font-weight:480;
            margin-bottom: 6px;
            font-size: 19px;
            text-transform:uppercase;

        }
        .container .user-data .date-made {
            color: #9b9b9b;
            font-size: 14px;
            text-transform: full-size-kana;
        }
        .container .img-container {
            width: 70px;
            height: 70px;
        }
        .container .img-container img {
            width: inherit;
            height: inherit;
            display: block;
            border-radius: 50%;
        }
        .container .footer {
            width: inherit;
        }
        .container .footer > div {
            margin-left: 97px;
            line-height: 32px;
            letter-spacing: -0.003em;
            color: #363636;
            font-size:16px;
        }

        @media(max-width:611px){
            .container .footer > div {
                margin-left:0px;
            }
        }
    `;

    protected override render(): unknown {
        return html`
            <div class="container">
                <div class="header">
                    <div class="img-container">
                        <img src=${this.imgSource} />
                    </div>
                    <div class="user-data">
                        <div class="user-name">${this.userName}</div>
                        <div class="date-made">${this.dateCreated}</div>
                    </div>
                </div>
                <div class="footer">
                    <div class="comment-data">${this.comment}</div>
                </div>
            </div>
        `;
    }
}
