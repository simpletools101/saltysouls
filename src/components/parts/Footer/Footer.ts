/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "../../ui/elements/productLink/productLink";

@customElement("xf-footer")
export class Footer extends LitElement {
    static override styles = css`
        :host {
            width: 100%;
        }
        .container {
            width: inherit;
            height: inherit;
            background-color: #000;
            border: 1px solid transparent;
        }

        .container > .wrapper {
            width: 85%;
            height: inherit;
            margin: auto;
        }
        .wrapper > .part-1 {
            width: 100%;
            height: 300px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            border-bottom: 1px solid #fff;
        }
        .wrapper > .part-2 {
            height: 200px;
            width: 100%;
            color: #fff;
        }
        .part-1 .company-slogan {
            margin: 40px;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .company-slogan xf-product-link {
            font-size: 24pt;
        }
        .company-slogan .sl {
            margin-top: 10px;
            color: #fff;
        }

        .part-1 .links-section {
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: 40px;
            border-left: 1px solid #ebebeb;
            padding-left: 50px;
        }

        .part-1 .links-section a {
            display: block;
            text-decoration: none;
            color: #fff;
            margin: 8px 0px 8px 0px;
        }

        .part-2 a {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #fff;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-left: 5px;
            margin-right: 5px;
            color: #fff;
            font-size: 24px;
        }
        .part-2 a:hover {
            border-color: var(--turquoise);
            color: var(--turquoise);
        }

        .part-2 .section-1 {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: inherit;
        }
        .part-2 .section-1 .social-links-container {
            margin-bottom: 8px;
            display: flex;
        }
        .part-2 .copyright-statment {
            text-align: center;
            margin-top: 8px;
        }
        @media (max-width) {
            .company-slogan .sl {
                text-align: center;
            }
        }

        @media (max-width: 575px) {
            .wrapper > .part-1 {
                display: block;
                border-bottom: none;
            }
            .part-1 .company-slogan {
                padding: 20px 0px 30px 0px;
                align-items: center;
            }
            .part-1 .links-section {
                border-left: none;

                padding-left: 0px;
                display: flex;
                align-items: center;
                padding-top: 0px;
                padding-bottom: 20px;
            }
        }
    `;

    override render() {
        return html`
            <div class="container">
                <div class="wrapper">
                    <div class="part-1">
                        <div class="company-slogan">
                            <xf-product-link></xf-product-link>
                            <div class="sl">
                                Faithfull Living in a Modern World
                            </div>
                        </div>
                        <div class="links-section">
                            <a href="/aboutus">ABOUT US</a>
                            <a href="/articles">ARTICLES</a>
                            <a href="/privacy-policy">PRIVACY POLICY</a>
                        </div>
                    </div>
                    <div class="part-2">
                        <div class="section-1">
                            <nav class="social-links-container">
                                <a
                                    target="_blank"
                                    aria-label="Check out Patkimera on instagram"
                                    href="https://www.instagram.com/patkimera/"
                                    ><iconify-icon
                                        class="icl-icon"
                                        icon="mdi:instagram"
                                    ></iconify-icon
                                ></a>
                            </nav>
                            <div class="copyright-statment">
                                &copy; Copyright Patkimera. All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
