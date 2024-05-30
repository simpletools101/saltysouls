/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { consume } from "@lit/context";
import { RequestsModel, IRequestsContext } from "../../services/api/requestsModel";
import { SearchTerm } from "../../services/api/graphql/search/searchTerm";
import { ref, createRef } from "lit/directives/ref.js";
import { repeat } from "lit/directives/repeat.js";
import { ISearchItem } from "../../types/blogPost";
import { styleMap } from "lit/directives/style-map.js";
import "../../components/ui/elements/searchItem/searchItem";

@customElement("xf-route-search")
export class SearchRoute extends LitElement {
    /**
     *
     * Get access to the Requests Data
     */

    @consume({ context: IRequestsContext })
    @property({ attribute: false })
    public requestsContext!: RequestsModel;

    /**
     * The Search Results from the query
     */
    @property({ attribute: false }) searchResults: ISearchItem[] = [];
    /**
     * Check if the cancel button is visible or not
     */
    @property({ attribute: false }) isCancelBtnVisible: boolean = false;
    /**
     * InputElementRef
     */
    private __inputRef = createRef<HTMLInputElement>();
    /**
     * Return the Input Element from the Reference
     * @returns  HTMLInputElement
     */
    private __inputElement() {
        return this.__inputRef.value!;
    }

    /**
     * Check if there are any search results are available
     */
    @state() noResultsFound: boolean = false;

    /**
     * Check if we made an initial Request
     */

    @state() didMakeInitialRequest: boolean = false;

    /**
     * Registered Query
     */
    public _registeredSearchQuery: string = "";

    private async getSearchResults() {
        const currentInputValue = this.getInputValue();
        if (currentInputValue.length > 0) {
            //Get Search Cache item that were filtered by the requests context

            let currentSearchCacheItems = await this.requestsContext.__searchItemsPromise.__cowait();

            //Make a new Searh Term
            let makeSearchTerm = new SearchTerm({
                cachedItems: currentSearchCacheItems,
                query: currentInputValue,
            });

            this._registeredSearchQuery = currentInputValue;
            let searchResults = await makeSearchTerm.makeSearchAsync();
            if (searchResults.length > 0) {
                //filter out results
                this.searchResults = searchResults.map((data) => {
                    return {
                        title: data.title,
                        createdAt: data.createdAt,
                        readtime: data.readtime,
                        slug: data.slug,
                        id: data.id,
                    };
                });
            } else {
                //alert no searchResults were found
                this.noResultsFound = true;
            }
        }
    }

    private getInputValue() {
        return this.__inputElement().value;
    }

    private onDidEnterValue(event: any) {
        let _element = event.target! as HTMLInputElement;
        if (_element.value.length > 0) {
            this.isCancelBtnVisible = true;
        } else {
            this.isCancelBtnVisible = false;
            this.searchResults = [];
        }
    }

    private onDidRequestKeyDown(ev: KeyboardEvent) {
        if (ev.key !== "" && ev.key !== "Enter") {
            return;
        }

        if (ev.key == "Enter") {
            this.getSearchResults();
        }
    }

    private clearSearchQuery() {
        this.__inputElement().value = "";
        this._registeredSearchQuery = "";
        this.isCancelBtnVisible = false;
        this.noResultsFound = false;
        this.searchResults = [];
    }

    public static override styles = css`
        :host {
            display: block;
            width: 100%;
            --search-input-bg: #fffefe;
        }

        .container {
            width: 100%;
            height: fit-content;
        }

        .container .search-aux-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .search-aux-section .title-section {
            font-size: 24px;
            font-weight: 450;
            color: var(--turquoise);
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .search-aux-section .results-section {
            margin-top: 35px;
            color: rgb(113, 110, 110);
            font-size: 19px;
        }

        .container .search-container {
            display: flex;
            align-items: center;
        }

        .search-container #searchItem {
            width: 500px;
            height: 40px;
            display: flex;
            border: 1px solid #c4c4c4;
            border-radius:5px;
            background-color: var(--search-input-bg);
        }

        .search-container #search-input-area {
            height: inherit;
            width: 450px;
            font-family: "Lato", sans-serif;
            border-radius:5px;

            outline: none;
            border: unset;
            font-size: 15px;
            background-color: var(--search-input-bg);
        }

        .search-container #search-input-area::-webkit-search-cancel-button {
            display:none;
        }

        .search-container #search-input-area::placeholder {
            position: relative;
            margin-left:10px;
        }

        .search-container .cancel-control {
            /* display: flex; */
            height: inherit;
            width: 50px;
            align-items: center;
            justify-content: center;
            color: var(--turquoise);
            display: none;
            font-size: 18px;
            cursor: pointer;
        }

        .search-btn-magnifyer {
            margin-left: 8px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            font-size: 15px;
            color: #fff;
            transition: all 0.3s;
            cursor: pointer;
            height: 40px;
            background-color: var(--turquoise);
            border: 2px solid var(--turquoise);
            text-decoration: none;
        }
        .search-btn-magnifyer:hover {
            border-color: #000;
            background-color: unset;
            color: #000;
        }
        .search-btn-magnifyer iconify-icon {
            font-size: 17px;
        }

        .container .results-container {
            height: 500px;
            width: 100%;
        }

        .container .results-container .wrapper {
            height: inherit;
            width: 75%;
            overflow-y: auto;
            overflow-x: hidden;
            margin: auto;
            padding-right: 10px;
        }

        @media (max-width: 878px) {
            .search-container #searchItem {
                width: 350px;
            }
        }
        @media (max-width: 510px) {
            .search-container #searchItem {
                width: 300px;
            }
        }
    `;

    private createSlateTextUI() {
        let _finalValue = "";
        if (this.didMakeInitialRequest) {
            if (this.noResultsFound) {
                _finalValue = "No Results Found";
            } else {
                _finalValue = `${this.searchResults.length} result${this.searchResults.length > 1 ? "s" : ""}
                for "${this._registeredSearchQuery.length > 0 ? this._registeredSearchQuery : "Unknown Entry"}"`;
            }
        } else {
            _finalValue = "Find Your Article!";
        }
        return _finalValue;
    }

    protected override render(): unknown {
        return html`
            <xf-marginal-container>
                <div class="container">
                    <div class="search-aux-section">
                        <div class="title-section">Search Articles</div>
                        <div class="search-container">
                            <div id="searchItem">
                                <label id="prompt" for="search-input-area" aria-hidden="true" hidden
                                    >Search Articles</label
                                >
                                <input
                                    ${ref(this.__inputRef)}
                                    placeholder="Search Articles"
                                    @input=${this.onDidEnterValue}
                                    @keydown=${this.onDidRequestKeyDown}
                                    type="search"
                                    autocomplete="off"
                                    autocapitalize="none"
                                    id="search-input-area"
                                    autofocus
                                    spellcheck="false"
                                />
                                <xf-make-button
                                    style=${styleMap({
                                        display: this.isCancelBtnVisible ? "flex" : "none",
                                    })}
                                    class="cancel-control"
                                    @xf-key-tap=${this.clearSearchQuery}
                                    >&Cross;</xf-make-button
                                >
                            </div>
                            <xf-make-button class="search-btn-magnifyer" @xf-key-tap=${this.getSearchResults}>
                                <iconify-icon icon="material-symbols-light:search"></iconify-icon>
                            </xf-make-button>
                        </div>
                        <div class="results-section">${this.createSlateTextUI()}</div>
                    </div>

                    <main class="results-container">
                        <div class="wrapper">
                            ${repeat(this.searchResults, (item) => {
                                return html`
                                    <xf-search-item
                                        .itemTitle=${item.title}
                                        .itemCreatedAt=${item.createdAt}
                                        .itemReadtime=${item.readtime.text}
                                        .itemSlug=${item.slug}
                                    ></xf-search-item>
                                `;
                            })}
                        </div>
                    </main>
                </div>
            </xf-marginal-container>
        `;
    }
}
