/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('xf-route-notfound')
export class NotFoundComponent extends LitElement {

    static override get styles(){
        return css`
            :host {
                display:block;
                width:100%;
            }

            .container {
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;
                margin:50px 0px 50px 0px;
            }
            .container .ls-number {
                font-size:120pt;
                  font-family: "Dancing Script", cursive;;
                color:var(--turquoise);
            }
            .container p {
                text-align:center;
                color:var(--turquoise);
                font-size:25px;
            }
            .container a {
                color:var(--turquoise);
            }
            .container span {
                color:#202020;
            }

        `
    }

    protected override render(): unknown {
        return html`
            <xf-marginal-container isPlane>
                <div class="container">
                    <div class="ls-number">
                        4<span>0</span>4
                    </div>
                    <p>Hmmm.. Seems we can't find your page</p>
                    <a href="/">Let's go Home</a>
                </div>
            </xf-marginal-container>
        `
    }
}