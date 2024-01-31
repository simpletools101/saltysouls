/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { html } from "lit";
import { LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("xf-announce-item")
export class AnnounceComponent extends LitElement {
    /**
     *
     * Get access to the Requests Data
     */
    @property({ attribute: false }) latestBlogTitle: string = "";
    @property({ attribute: false }) latestBlogSlug: string = "";

    static override get styles() {
        return css`
            :host {
                display: block;
                width: 100%;
                height: fit-content;
            }
            .container-xr {
                height: inherit;
                width: inherit;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #000;
                color: #fff;
                position: relative;
                font-size: 16px;
                padding-top: 10px;
                padding-bottom: 10px;
            }
            .container-xr .content {
                margin-left: 8px;
                text-align: center;
            }
            .container-xr a {
                color: #fff;
                margin-right: 8px;
            }
            .container-xr .banner-remove-btn {
                color: #fff;
                font-size: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: fit-content;
                width: 30px;
                border: 1px solid #fff;
                margin-right: 5px;
                cursor: pointer;
            }
            .container-xr .banner-remove-btn:hover {
                color: var(--turquoise);
            }

            @media (max-width: 767px) {
                .container-xr {
                    font-size: 15px;
                }
            }
            @media (max-width: 665px) {
                .container-xr .banner-remove-btn {
                    right: 5px;
                }
            }
        `;
    }

    private clearBanner() {
        this.style.display = "none";
    }

    protected override render(): unknown {
        return html`
            <div class="container-xr">
                <div class="place-holder"></div>
                <div class="content">
                    <span>Check it Out:</span
                    ><a href=${`/blog/${this.latestBlogSlug}`}
                        >${this.latestBlogTitle} 🚕</a
                    >
                </div>
                <xf-make-button
                    @xf-key-tap=${this.clearBanner}
                    title="Remove banner"
                    class="banner-remove-btn"
                    aria-label="Remove announcement"
                    >&Cross;</xf-make-button
                >
            </div>
        `;
    }
}
