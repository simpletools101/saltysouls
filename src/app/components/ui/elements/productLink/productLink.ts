/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * 
 * Server Side (Component)
 * 
 */


import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("xf-product-link")
export class ProductLink extends LitElement {
    static override get styles() {
        return css`
            :host {
                display: block;
                font-size:17pt;
            }
            a {
                height: 100%;
                width: fit-content;
                font-size: inherit;
                display: flex;
                align-items: center;
                color: #fff;
                text-decoration: none;
                font-family: Pacifo;
            }
        `;
    }

    protected override render(): unknown {
        return html` <a href="/">SaltySouls</a> `;
    }
}
