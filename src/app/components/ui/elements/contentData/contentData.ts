/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("xf-content-data")
export class ContentData extends LitElement {
    static override styles = css`
        .content-data {
            font-size: 17px;
            width: 90%;
            margin-left: 30px;
            color: #2e2e2e;
        }
    `;
    protected override render(): unknown {
        return html` <p class="content-data"><slot></slot></p> `;
    }
}
