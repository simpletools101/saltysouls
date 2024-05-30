/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { RouterLocation,Commands,Router ,PreventResult} from "@vaadin/router"

export interface IVaadinSL{
    onBeforeEnter?(location:RouterLocation, commands:Commands, router:Router):unknown;
    onAfterEnter?(location:RouterLocation, commands:Commands, router:Router):unknown;
    onBeforeLeave?(location:RouterLocation, commands:Commands, router:Router):unknown;
    onAfterLeave?(location:RouterLocation, commands:Commands, router:Router) :unknown;
}
