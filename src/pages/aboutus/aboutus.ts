/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { consume } from "@lit/context";
import { IResourcesContext, IResources } from "../../services/api/resourcesContext";
import aboutusData from "./lib/about_part.json";
import "./pch";

interface IContentType {
    id: string;
    content: string;
}

@customElement("xf-route-aboutus")
export class AboutusRoute extends LitElement {

    /**
     * Get Access to Resources
     */
    @consume({ context: IResourcesContext })
    @property({ attribute: false })
    public resourcesContext!: IResources;


    /**
     * 
     * Format the data putting in consideration of html tags
     * 
     * @param content The content from the aboutus Json File
     * @returns 
     */

    private formatItems(content: string | IContentType[]) {
        if (typeof content == "string") {
            return html` <xf-content-data>${content}</xf-content-data> `;
        } else {
            return html`
                ${map(content, (item) => {
                    return html`
                        <xf-content-data>${item.content}</xf-content-data>
                    `;
                })}
            `;
        }
    }

    public static override get styles() {
        return css`
            .content {
                padding-top: 50px;
                padding-bottom: 50px;
                width: 80%;
            }

            a.sml-email {
                color: var(--turquoise);
            }

            @media(max-width:843px){
                .content {
                    padding-top:30px;
                    width:85%;
                }
            }
            @media(max-width:761px){
                .content {
                    padding-top:20px;
                    width:95%;
                }
            }

            @media(max-width:667px){
                .content {
                    padding-top:15px;
                    width:100%;
                }
            }
        `;
    }

    protected override render(): unknown {
        return html`
            <div class="container">
                <div class="view-1">
                    <xf-route-banner
                        .imgSrc=${"https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        .routeTitle=${"About us"}
                        .routeStatement=${"Why are we Here?"}
                    ></xf-route-banner>
                </div>
                <div class="view-2">
                    <xf-marginal-container>
                        <div class="content">
                            ${map(aboutusData.content, (item) => {
                                return html`
                                    <div class="item-container">
                                        <xf-content-title
                                            >${item.title}</xf-content-title
                                        >
                                        ${this.formatItems(item.content)}
                                    </div>
                                `;
                            })}
                        </div>
                    </xf-marginal-container>
                </div>
            </div>
        `;
    }
}
