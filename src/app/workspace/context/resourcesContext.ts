/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createContext as createServiceContext } from "@lit/context";

//@ts-expect-error
import DefaultPageImg from "../../public/assets/imgs/photo1.jpg"
//@ts-expect-error
import AboutusPageImg from "../../public/assets/imgs/photo2.jpg"
//@ts-expect-error
import ArticlesPageImg from "../../public/assets/imgs/photo3.jpg"
//@ts-expect-error
import UserImage from "../../public/assets/imgs/user.png"


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


export const Resources:IResources = {
    imageSources : {
        DefaultPage :DefaultPageImg,
        AboutUsPage :AboutusPageImg,
        ArticlesPage : ArticlesPageImg,
        commentsUserImage : UserImage
    }
}