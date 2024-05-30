/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Server side (Component);
 */

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("xf-common-quote")
export class CommonQuote extends LitElement {
    static override get styles() {
        return css`
            :host {
                display: block;
            }

            .welcome-item-container {
                width: 100%;
                height: 450px;
                background-color: #ffffff;
                opacity: 1;
                background: repeating-linear-gradient(-45deg, #4bcbb5, #4bcbb5 5px, #ffffff 5px, #ffffff 25px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .welcome-item-container > .statement {
                width: fit-content;
                padding: 30px;
                font-size: 35pt;
                font-weight: 700;
                font-family: "Dancing Script", cursive;
                text-align: center;
                font-display: auto;

                /* border: 5px solid var(--turquoise); */
            }

            .welcome-item-container .welcome-item-btn {
                height: 50px;
                width: 160px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                background-color: var(--turquoise);
                color: #fff;
                margin-top: 15px;
                border: 2px solid #fff;
                transition: all 0.3s;
            }
            .welcome-item-container .cl-span {
                color: var(--turquoise);
            }
            .welcome-item-container .welcome-item-btn:hover {
                color: #000;
                border-color: #000;
                background-color: transparent;
            }

            @media (max-width: 793px) {
                .welcome-item-container > .statement {
                    font-size: 30pt;
                }

                .welcome-item-container .welcome-item-btn {
                    width: 130px !important;
                    height: 40px;
                    margin-top: 10px;
                }
            }

            @media (max-width: 605px) {
                .welcome-item-container {
                    height: 400px;
                }
            }

            @media (max-width: 589px) {
                .welcome-item-container > .statement {
                    font-size: 27pt;
                }
                .welcome-item-container .welcome-item-btn {
                    margin-top: 2px !important;
                }
            }

            @media (max-width: 409px) {
                .welcome-item-container {
                    height: 350px;
                }
            }
        `;
    }
    override render() {
        return html`
            <div class="welcome-item-container">
                <div class="statement">
                    Faithfull <span class="cl-span">Living</span> in a <span class="cl-span">Modern</span> World
                </div>
                <a href="/aboutus" aria-label="Learn More About Us" class="welcome-item-btn">Learn More</a>
            </div>
        `;
    }
}
