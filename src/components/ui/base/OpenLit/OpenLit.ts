/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement } from "lit";

export class OpenLit extends LitElement {

    protected override createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }
}