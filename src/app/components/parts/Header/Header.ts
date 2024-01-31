/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import type { TRoutes } from "../../../../types/routes";
import "../../ui/base/makeButton";
import "../../ui/elements/productLink/productLink";
import "../SideMenu/SideMenu";

@customElement("xf-header")
export class HeaderComponent extends LitElement {
    @property({ attribute: false }) currentTheme: "dark" | "light" = "light";
    @property({ attribute: false }) currentRoute: TRoutes = "/";
    @state() isSideMenuOpen: boolean = false;

    override connectedCallback(): void {
        super.connectedCallback();
        this.role = "heading";
    }

    private displaySideMenu() {
        this.isSideMenuOpen = true;
    }
    private hideSideMenu() {
        this.isSideMenuOpen = false;
    }

    static override get styles() {
        return css`
            :host {
                width: 100%;
                height: fit-content;
            }

            .container {
                width: inherit;
                height: inherit;
                background-color: var(--turquoise);
            }

            .container .wrapper {
                width: inherit;
                height: 70px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .product-link-view .wrapper {
                margin-left: 20px;
            }

            .navigation-bar-view .wrapper {
                display: flex;
            }

            .navigation-bar-view .wrapper a {
                text-decoration: none;
                margin: 0px 20px 0px 20px;
                transition: all 0.3s;
                font-size: 16px;
            }
            .navigation-bar-view .wrapper a {
                color: #fff;
            }

            .navigation-bar-view .wrapper a.active-link {
                color: rgb(57, 57, 56);
            }

            .navigation-bar-view .wrapper a:hover {
                color: #000;
            }

            .icon-button-view {
                margin-right: 10px;
            }
            .icon-container {
                height: 35px;
                width: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 22px;
                margin: 0px 5px 0px 5px;
                border-radius: 5px;
                cursor: pointer;
                border: 2px solid transparent;
                transition: all 0.3s;
            }

            .navigation-bars {
                display: none;
            }

            .icon-container:hover {
                border-color: #fff;
            }
            .icon-container:active {
                border-color: #9b9b9b;
            }

            /**
                Media Queries
             */

            @media (max-width: 961px) {
                .container .wrapper {
                    height: 60px;
                }
            }

            @media (max-width: 747px) {
                .container .wrapper {
                    height: 55px;
                }
                .navigation-bar-view .wrapper a {
                    font-size: 15px;
                }
            }

            @media (max-width: 601px) {
                .container .wrapper {
                    height: 54px;
                }
                .navigation-bar-view {
                    display: none;
                }
                .navigation-bars {
                    display: flex;
                }
            }

            @media(max-width:482px){
                .container .wrapper {
                    height: 53px;
                }
                xf-product-link {
                    font-size:20px;
                }
            }
        `;
    }

    protected override render(): unknown {
        return html`
            <div class="container">
                <div class="wrapper">
                    <div class="view product-link-view">
                        <div class="wrapper">
                            <xf-product-link></xf-product-link>
                        </div>
                    </div>
                    <div class="view navigation-bar-view">
                        <nav class="wrapper">
                            <a
                                aria-label="Home"
                                class=${classMap({
                                    "active-link": this.currentRoute == "/",
                                })}
                                href="/"
                                >Home</a
                            >
                            <a
                                aria-label="Articles"
                                class=${classMap({
                                    "active-link":
                                        this.currentRoute == "/articles",
                                })}
                                href="/articles"
                                >Articles</a
                            >
                            <a
                                aria-label="About us"
                                class=${classMap({
                                    "active-link":
                                        this.currentRoute == "/aboutus",
                                })}
                                href="/aboutus"
                                >About us</a
                            >
                        </nav>
                    </div>
                    <div class="view icon-button-view">
                        <div class="wrapper">
                            <a
                                href="/search"
                                class="icon-container search-control"
                                aria-label="Search Articles"
                                title="Search Articles"
                            >
                                <iconify-icon
                                    icon="material-symbols-light:search"
                                ></iconify-icon>
                            </a>

                            <xf-make-button
                                class="icon-container navigation-bars"
                                aria-label="Show Side Navigation"
                                title="Show Side Navigation"
                                @xf-key-tap=${this.displaySideMenu}
                            >
                                <iconify-icon icon="la:bars"></iconify-icon>
                            </xf-make-button>
                        </div>
                    </div>
                </div>
                <div class="presentation-container" role="presentation">
                    <xf-side-menu
                        .currentRoute=${this.currentRoute}
                        .isOpen=${this.isSideMenuOpen}
                        @xf-side-menu-event=${this.hideSideMenu}
                    >
                    </xf-side-menu>
                </div>
            </div>
        `;
    }
}
