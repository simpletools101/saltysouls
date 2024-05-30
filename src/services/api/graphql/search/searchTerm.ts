/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ISearchCard } from "../../../../../types/blogPost";

interface ISearchTermOptions {
    query: string;
    cachedItems: ISearchCard[];
}

export class SearchTerm {

    private _options: ISearchTermOptions;
    private _regex: RegExp;

    constructor(options: ISearchTermOptions) {
        this._options = options;
        this._regex = new RegExp(this._options.query, "i");
    }

    /**
     * Make a search and return search results
     * @returns 
     */

    public async makeSearchAsync(): Promise<ISearchCard[]> {
        return new Promise((c, e) => {
            if (this._options) {
                let _results = this._options.cachedItems.filter((items) => {
                    return (
                        this._regex.test(items.title) ||
                        this._regex.test(items.description) ||
                        this._regex.test(items.content.html)
                    );
                });
                if(_results.length > 0){
                    c(_results)
                }else{
                    c([])
                }
            }
        });
    }
}
