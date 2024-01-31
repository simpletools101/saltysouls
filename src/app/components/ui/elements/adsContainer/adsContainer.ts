/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("xf-ads-container")
export class AdsContainer extends LitElement {
    protected override render(): unknown {
        return html` <slot></slot> `;
    }
}
