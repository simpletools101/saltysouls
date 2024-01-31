/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../../ui/elements/productLink/productLink";
import type { TRoutes } from "../../../../types/routes";
import { map } from "lit/directives/map.js";

@customElement("xf-side-menu")
export class SideMenu extends LitElement {
    @property({ attribute: false }) currentRoute: TRoutes = "/";
    @property({ attribute: false }) isOpen: boolean = false;

    override updated() {
        let element = this.renderRoot.querySelector(
            ".side-nav-container"
        )! as HTMLDivElement;

        if (this.isOpen) {
            this.style.width = "250px";
            element.style.opacity = "1";
            this.ariaHidden = "true";
        } else {
            element.style.opacity = "0";
            this.style.width = "0px";
            this.ariaHidden = "false";
        }

    }

    private hideSideMenu() {
        this.style.width = "0px";
        this.ariaHidden = "false";
        let element = this.renderRoot.querySelector(
            ".side-nav-container"
        )! as HTMLDivElement;
        element.style.opacity = "0";
        
    }

    private onDidKeyDownNavLink(ev: KeyboardEvent) {
        if (ev.key !== "" && ev.key !== "Enter") {
            return;
        }

        if (ev.key == "Enter") {
            this.hideSideMenu();
        }
    }
    private onDidClickNavLink() {
        console.log("willClearNav")
        this.hideSideMenu();
    }

    public static override get styles() {
        return css`
            :host {
                width: 0;
                height: 100%;
                position: fixed;
                z-index: 1000;
                top: 0;
                left: 0;
            }
            .side-nav-container {
                width: inherit;
                height: inherit;
                background-color: #0c1413;
                overflow-x: hidden;
                overflow-y: hidden;
                opacity: 0;
                transition: 0.3s;
            }

            .side-nav-container .wrapper {
                position: relative;
                height: inherit;
                top: 15px;
                overflow-x: hidden;
                overflow-y: hidden;
                z-index: 1;
            }

            .side-nav-container .close-icon-container {
                cursor: pointer;
                border-radius: 8px;
                width: 40px;
                height: 40px;
                display: flex;
                font-size: 20px;
                align-items: center;
                justify-content: center;
                color: #fff;
                position: absolute;
                right: 0px;
                z-index: 3;
            }

            .side-nav-container .close-icon-container:hover {
                color: var(--turquoise);
            }
            .side-nav-container .product-link-container {
                height: 80px !important;
                width: inherit;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--turquoise);
            }

            .side-nav-container .navigation-links-container .wrapper a {
                text-decoration: none;
                display: block;
                color: #fff;
                margin: 25px 0px 25px 30px;
                transition: all 0.3s;
            }

            .side-nav-container a {
                color: #fff;
                font-size: 18px;
                width: fit-content;
            }

            .side-nav-container a:hover {
                color: var(--turquoise) !important;
            }

            .side-nav-container a.active-link {
                color: rgb(57, 57, 56);
            }
        `;
    }

    private dispatchDidRequestCloseAction() {
        this.dispatchEvent(new Event("xf-side-menu-event"));
    }

    protected override render(): unknown {
        const anchorMainData = [
            {
                label: "Home",
                link: "/",
            },
            {
                label: "Articles",
                link: "/articles",
            },
            {
                label: "About us",
                link: "/aboutus",
            },
            {
                label: "Search Article",
                link: "/search",
            },
            {
                label: "Privacy Policy",
                link: "/privacy-policy",
            },
        ];

        return html`
            <div class="side-nav-container">
                <xf-make-button
                    class="close-icon-container"
                    @xf-key-tap=${this.dispatchDidRequestCloseAction}
                >
                    <div class="icon-close">&Cross;</div>
                </xf-make-button>
                <div class="wrapper">
                    <div class="navigation-links-container">
                        <nav class="wrapper">
                            ${map(anchorMainData, (item) => {
                                return html`
                                    <a
                                        @click=${this.onDidClickNavLink}
                                        @keydown=${this.onDidKeyDownNavLink}
                                        href=${item.link}
                                        >${item.label}</a
                                    >
                                `;
                            })}
                        </nav>
                    </div>
                </div>
            </div>
        `;
    }
}
