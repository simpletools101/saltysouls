/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("xf-spinner")
export class Spinner extends LitElement {
    @property({ type: Boolean }) isSpinning: boolean = false;

    override updated(){
        if(this.isSpinning){
            this.hideOrShowContainer(true)

        }else{
            this.hideOrShowContainer(false)
        }
    };


    private hideOrShowContainer(isVisible:boolean){
        if(isVisible){
            this.style.display = "block"
        }else{
            
            this.style.display = "none"
        }
    }
    static override get styles() {
        return css`
            :host {
                display: block;
                width: 28px;
                height: 28px;
                margin: 0px 5px 0px 5px;
            }

            .spinner-container {
                width: inherit;
                height: inherit;
                display:flex;
                align-items:center;
                justify-content:center;
                
            }
            .spinner-item {
                border: 3px solid var(--turquoise) ;
                border-top-color: transparent;
                border-right-color: transparent;
                border-radius:50%;
                width:12px;
                height:12px;
            }

            .spinneranime {
                animation: rotate 0.5s linear infinite;
            }
            .spinnercontrol {
                display:flex;
                align-items:center;
                justify-content:center;
            }
            @keyframes rotate {
                100% {
                    transform: rotate(360deg);
                }
            }
        `;
    }

    override render() {
        return html`
            <div class="spinner-container">
                <div class=${classMap({ spinneranime: this.isSpinning,spinnercontrol : true })}>
                    <div class="spinner-item"></div>
                </div>
            </div>
        `;
    }
}