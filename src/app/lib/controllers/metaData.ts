/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { XFRouterModel } from "./xf-router";

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

interface IMetaDataFrame {
    /**
     * Used to set metaData to a particular page
     * @param route The route to apply the metaData
     * @param metaData the metaData to apply
     */
    setMetaDataFrame(route: string, metaData: IPageMetaData): void;

    /**
     * forcefully sets the metaData
     * @param route 
     * @param meta 
     */
    setMetaDataFrameForce(meta:IPageMetaData):void;

    /**
     * Initialize the metaData FrameWork;
     */
    initializeMetaDataFrameWork(): void;
}

export class MetaDataFrame implements IMetaDataFrame {
    private metaDescription: HTMLMetaElement = document.querySelector(
        'meta[name="description"]'
    )! as HTMLMetaElement;
    private metaKeyWords: HTMLMetaElement = document.querySelector(
        'meta[name="keywords"]'
    )! as HTMLMetaElement;

    private _metaDataFrames: Map<string, IPageMetaData> = new Map();
    private _initialRoute: string = "";

    public setCurrentRoute(route:string){
        this._initialRoute  = route;
    }

    initializeMetaDataFrameWork(): void {
        this.applyMetaData(this._initialRoute);
        this.initalizeGlobalRouteListener();
    }

    private initalizeGlobalRouteListener() {
        XFRouterModel.onDidNavigate.subscribeAsync((loc) => {
            this.applyMetaData(loc.pathname);
        });
    }

    private applyMetaData(requestedRoute: string) {
        if (this._metaDataFrames.has(requestedRoute)) {
            let metaData: IPageMetaData =
                this._metaDataFrames.get(requestedRoute)!;
            document.title = metaData.title;
            if (metaData.description) {
                this.metaDescription.content = metaData.description;
            }
            if (metaData.keywords && metaData.keywords.length > 0) {
                let flattenedKeyWords = metaData.keywords.join(",");
                this.metaKeyWords.content = flattenedKeyWords;
            }
        }
    }

    public setMetaDataFrameForce(meta: IPageMetaData): void {
        document.title = meta.title;
        this.metaDescription.content = meta.description;
    }

    setMetaDataFrame(route: string, metaData: IPageMetaData): void {
        if (!this._metaDataFrames.has(route)) {
            this._metaDataFrames.set(route, metaData);
        }
    }
}

export const MetaDataFrameManager = new MetaDataFrame()