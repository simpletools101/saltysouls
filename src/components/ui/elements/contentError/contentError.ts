/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export class ContentError {


    private element:HTMLElement | undefined = undefined;
    private messageElement:HTMLElement | undefined = undefined;
    private messageContent:string = ""


    constructor(messageItem:string){
        this.messageContent  = messageItem;
        this.createElementLayout()
    }

    private applyDefaultStyles() {
        if(this.element && this.messageElement) {
            this.element.style.width= "100%";
            this.element.style.padding = "20px";
            this.element.style.position = "fixed";
            this.element.style.top = "0px"

            this.element.style.display = "flex";
            this.element.style.alignItems = "center"
            this.element.style.justifyContent = "center"
            this.element.style.border = "1px solid #4e1212";
            this.element.style.backgroundColor = "#ffdcdc"
            this.messageElement.style.color = "#d72c2c"
        }
    }

    private createElementLayout(){
        this.element = document.createElement("div");
        this.messageElement = document.createElement("div");
        this.element.className = "content-error-element"
        this.messageElement.className = "message-element";
        this.messageElement.textContent = this.messageContent;
        this.element.appendChild(this.messageElement)
        this.applyDefaultStyles()
    }

    public getElement() {
        return this.element!;
    }

}

/**
 * Used when the data is invalid
 * @param message 
 */

export function createContentError(message:string){
    let item = new ContentError(message);
    document.body.appendChild(item.getElement())
}