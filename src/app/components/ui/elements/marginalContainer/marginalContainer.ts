/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Server side (Component);
 */

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("xf-marginal-container")
export class MarginalContainer extends LitElement {


    @property({type:Boolean}) isPlane:boolean = false; 

    static override get styles() {
        return css`
            :host {
                width: 100%;
                height: auto;
            }
            .marginal-container {
                width: 100%;
                height: fit-content;
            }

            .marginal-container > div {
                width: 85%;
                height: inherit;
                margin: auto;
                background-color: #fff;
                 display: grid;
                justify-items: center;
            }

            @media(max-width:460px){
                .marginal-container > div {
                    width:90%
                }
            }
            @media(max-width:430px){
                .marginal-container > div {
                    width:100%
                }
            }
        `;
    }
    protected override render(): unknown {
        return html`
            <div class="marginal-container" style=${styleMap({"background-color" : !this.isPlane ? '#f8f8f8;' : '#fffcfc'})}>
                <div class="content" style=${styleMap({
                    "background-color": this.isPlane ? '#fffcfc' : '#fff',
                    "box-shadow" : !this.isPlane ? '0 30px 50px 0 #01010126;' : 'unset'})}><slot></slot></div>
            </div>
        `;
    }
}
