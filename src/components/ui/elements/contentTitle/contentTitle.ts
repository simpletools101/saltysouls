/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("xf-content-title")
export class ContentTitle extends LitElement {
    static override styles = css`
    :host {
        font-size:24pt;
    }
        .content-title-container {
            width: 100%;
            font-size:inherit;
        }

        .content-title-container h2 {
            width: fit-content;
            margin: 30px 0px 23px 30px;
            font-size: inherit;
            font-weight: bolder;
        }
    `;

    protected override render(): unknown {
        return html`
            <div class="content-title-container">
                <h2 class="wrapper"><slot></slot></h2>
            </div>
        `;
    }
}
