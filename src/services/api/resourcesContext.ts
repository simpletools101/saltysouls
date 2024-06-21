/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createContext as createServiceContext } from "@lit/context";

/**
 * Load all the resources(Images) of the page
 */

export const IResourcesContext = createServiceContext<IResources>(
    Symbol("ResourcesContext")
);

export type IResources = {
    imageSources: {
        DefaultPage: string;
        AboutUsPage: string;
        ArticlesPage: string;
        commentsUserImage:string
    };
};


