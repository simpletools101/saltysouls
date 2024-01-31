/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("xf-route-banner")
export class RouteBanner extends LitElement {
    @property({ attribute: false }) imgSrc: string = "";
    @property({ attribute: false }) routeTitle: string = "";
    @property({ attribute: false }) routeStatement: string = "";

    static override styles = css`
        .route-banner-container {
            width: 100%;
            height: 450px;
            position: relative;
        }

        .route-banner-container .image-background {
            width: inherit;
            height: inherit;
            background-size: cover;
            background-position:center;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }

        .route-banner-container .backdrop-element {
            background-color: rgba(0, 0, 0, 0.5);
            width: inherit;
            height: inherit;
        }

        .route-banner-container .route-details-container {
            width: inherit;
            height: inherit;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            color: #fff;
            z-index: 34;
            position: absolute;
            top: 0px;
        }

        .route-banner-container .route-details-container > div:nth-child(1) {
            font-size: 55pt;
            margin-bottom: 8px;
        }

        .route-banner-container .route-details-container > div:nth-child(2) {
            color: #bebebe;
            text-align:center;
            margin:0px 5px 0px 5px;
        }

        @media(max-width:495px){
            .route-banner-container .route-details-container > div:nth-child(1) {
                font-size:40pt;
            }
        }

        @media(max-width:465px){
            .route-banner-container {
                height:400px;
            }
        }
        @media(max-width:401px){
            .route-banner-container {
                height:350px;
            }
        }
    `;

    override render() {
        return html`
            <div class="route-banner-container">
                <div
                    class="image-background"
                    style=${styleMap({
                        "background-image": `url(${this.imgSrc})`,
                    })}
                >
                    <div class="backdrop-element"></div>
                    <div class="route-details-container">
                        <div class="route-title">${this.routeTitle}</div>
                        <div class="route-statement">${this.routeStatement}</div>
                    </div>
                </div>
            </div>
        `;
    }
}
