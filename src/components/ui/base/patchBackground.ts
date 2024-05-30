/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("xf-patch-background")
export class XFPatchBackground extends LitElement {
    @property() patchImageSource: string = "";

    static override get styles() {
        return css`
            :host {
                display: block;
                width: inherit;
                height: inherit;
            }
            .container {
                display: block;
                height: inherit;
                width: inherit;
                position: relative;
                background-size: cover;
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-position:center;
            }
            .container > .backdrop-view {
                display: block;
                height: inherit;
                width: inherit;
                background-color:#000000b3;
            }
            .container > .main-content-view {
                position: absolute;
                top: 0px;
                height: inherit;
                width: inherit;
            }
        `;
    }

    protected override render(): unknown {
        return html`
            <div
                class="container"
                style=${styleMap({
                    "background-image": `url(${this.patchImageSource})`,
                })}
            >
                <div class="backdrop-view"></div>
                <div class="main-content-view">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}
