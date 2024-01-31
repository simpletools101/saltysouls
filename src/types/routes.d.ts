/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export type TRoutes = "/"  | "/articles" | "/aboutus" | "/privacy-policy"

interface IPageMetaData {
    /**
     * The title of the Page
     */
    title: string;

    /**
     * The key Words for the page
     */
    keywords?: string[];

    /**
     * The description of the page
     */
    description: string;
}

export interface TServerSideProps {
    
    /**
     * The Page meta data
     */
    pageMetaData : IPageMetaData;

    
}