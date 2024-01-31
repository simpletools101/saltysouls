/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("xf-blog-like-item")
export class BlogLikeItem extends LitElement {

    @property({attribute:false}) imgSource:string = "";
    @property({attribute:false}) titleContent:string = "";
    @property({attribute:false}) linkSource:string = ""

    static override styles = css`   
    
        .container {
            width:300px;
            height:fit-content;
            margin:30px 20px 30px 0px;
        }
        .container .img-container{
            display:block;
            height:inherit;
            width:inherit;
            border:2px solid var(--turquoise);
            object-fit:cover;
        }
        .container a {
            display:block;
            text-decoration:none;
            margin-top:10px;
            color:#000;
            font-weight:bold;
            font-size:20px;
        }
        .container a:hover {
            color:var(--turquoise);
        }
    `

    protected override render(): unknown {
        return html`
            <div class="container">
                <img src=${this.imgSource} class="img-container"/>
                <a href=${this.linkSource}>${this.titleContent}</a>
            </div>
        `
    }
}