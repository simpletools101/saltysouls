/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { html } from "lit";
import { LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";



@customElement("xf-comment-notification")
export class CommentNotification extends LitElement {
    @property({ attribute: false }) contentValue: string =
        "Hello Its Kalema Here";
    @property({ attribute: false }) type: "error" | "success" = "success";

    override updated() {
        if (this.contentValue.length > 0) {
            this.showNotification();
        }
    }

    private showNotification() {
        this.style.display = "block";
        this.style.opacity = "1";
        this.style.transform = "translateY(0px)";

        setTimeout(()=>{
            this.hideNotification()
        },7500)
    }

    public static override get styles() {
        return css`
            :host {
                display:block;
                position: fixed;
                bottom: 20px;
                right: 20px;
                transition:all .3s;
                transform : translateY(100px);
                opacity: 0;
            }
            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid;
                border-radius: 8px;
                transition:all .3s;

            }
            .container .content {
                padding: 25px;
                color: #2d2d2d;
            }
        `;
    }

    private hideNotification(){
        this.style.opacity = "0"
        this.style.transform = 'translateY(100px)'
        this.style.display = "none"
    }

    protected override render(): unknown {
        return html`
            <div
                class="container"
                style=${styleMap({
                    "border-color":
                        this.type == "success"
                            ? "var(--turquoise)"
                            : "rgb(223, 45, 62)",
                })}
            >
                <div
                    class="content"
                    style=${styleMap({
                        "background-color":
                            this.type == "success"
                                ? "#8adfd152"
                                : "rgb(223 138 138 / 32%)",
                    })}
                >
                    ${this.contentValue}
                </div>
            </div>
        `;
    }
}
