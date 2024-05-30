/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("xf-make-button")
export class MakeButton extends LitElement {


    private makeClickAndkeyboardListener() {
        this.addEventListener("click", () => {
            this.dispatchClickorkeyboarEvent();
        });

        this.addEventListener("keydown",(ev)=>{
            if(ev.key !== "" && ev.key !== "Enter"){
                return;
            }

            if(ev.key == "Enter"){
                this.dispatchClickorkeyboarEvent();
            }
        })
    }

    private dispatchClickorkeyboarEvent() {
        this.dispatchEvent(new Event("xf-key-tap", { bubbles: true }));
    }

    private loadAccessibility() {
        this.role = "button";
        this.tabIndex = 0;
    }

    override connectedCallback(): void {
        super.connectedCallback();
        this.loadAccessibility();
        this.makeClickAndkeyboardListener();
    }

    protected override render(): unknown {
        return html` <slot></slot> `;
    }
}
