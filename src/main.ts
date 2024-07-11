/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {  css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { XFRouterModel } from "./utils/xf-router";
import { routes } from "./webRoutes";
import { RequestsModel, IRequestsContext } from "./services/api/requestsModel";
import { provide } from "@lit/context";
import type { TRoutes } from "./types/routes";
import "./components/parts/Header/Header";
import "./components/parts/Footer/Footer";
import "./components/ui/elements/announceItem/announceItem";
import "./styles/global.css";
import "./styles/theme.css";
import "iconify-icon";
import { updatePageTitleFromBlog } from "./services/api/updateTitle";
import { OpenLit } from "./components/ui/base/OpenLit/OpenLit";

@customElement("xf-web-main")
export class WebMain extends OpenLit{
    /**
     * Common State for Most Components ------
     */

    // Remember the currentRoute
    @state() currentRoute: TRoutes = "/";

    /**
     * Get the Latest Blog Title
     */

    @state() __latestBlogTitle: string = "";

    /**
     * Get the Latest Blog Slug Title
     */
    @state() __latestBlogSlug: string = "";

    /**
     * Remember that we initialized;
     */
    private didInitialize: boolean = false;

    /**
     * Initialize RequestsContext for fetching BlogData
     */
    @provide({ context: IRequestsContext }) requestsContext: RequestsModel = new RequestsModel();

    static override get styles() {
        return css`
            #outlet > .leaving {
                animation: 1s fadeOut ease-in-out;
            }

            #outlet > .entering {
                animation: 1s fadeIn linear;
            }

            @keyframes fadeOut {
                from {
                    opacity: 1;
                }

                to {
                    opacity: 0;
                }
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }

                to {
                    opacity: 1;
                }
            }
        `;
    }

    /**
     * Setup the router Model including the routes that belong to the routeModel
     */
    private intializeXFModelRouter() {
        XFRouterModel.setOutlet(this.routerOutletContainer());
        XFRouterModel.setViewRoutes(routes);
        XFRouterModel.initializeRouter();
    }

    /**
     * Attach a listener to update the currentRoute based on the RouteLocationParams
     */
    private listenForParamAndOptionsChange() {
        XFRouterModel.onDidNavigate.subscribeAsync((args) => {
            this.currentRoute = args.pathname! as TRoutes;
            switch(this.currentRoute){
                case "/":
                    updatePageTitleFromBlog("Patkimera - Grow and Change Your Life daily")
                    break;
                case "/aboutus":
                    updatePageTitleFromBlog("Patkimera - About us")
                    break;
                case "/articles":
                    updatePageTitleFromBlog("Patkimera - Articles")
                    break;
                case  "/privacy-policy":
                    updatePageTitleFromBlog("Privacy Policy")
            }
            document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
    }

    /**src/app/lib/controllers/dateTimeM.ts src/app/lib/controllers/errors.ts src/app/lib/controllers/globald.ts src/app/lib/controllers/metaData.ts src/app/lib/controllers/xf-router.ts
     * Get the initial Route Params from the RouteLocation Object
     * and update the current Route
     */

    private updateRouteParamsAndOptions() {
        XFRouterModel.getInitialRouterParamsAndOptions().then((args) => {
            // set the currentRoute from the Router Params and Options
            //This enables the navigation Menu to reflect the detail
            this.currentRoute = args.pathname! as TRoutes;
        });
    }

    private initializeRequestContext() {
        this.requestsContext.__intialize__();

        //request the articles card async
        //This enables us to update the latest blog title and slug

        this.requestsContext.__articleCardsPromise.__cowait().then((v) => {
            let _latestBlog = v[0];
            this.__latestBlogSlug = _latestBlog.slug;
            this.__latestBlogTitle = _latestBlog.title;
        });
    }

    override firstUpdated() {
        if (!this.didInitialize) {
            this.initializeRequestContext();
            this.intializeXFModelRouter();
            this.updateRouteParamsAndOptions();
            this.listenForParamAndOptionsChange();
        }
    }

    public routerOutletContainer() {
        return this.querySelector("#outlet")! as HTMLDivElement;
    }

    protected override render(): unknown {
        return html`
            <div class="main-app-container">
                <div class="wrapper">
                    <xf-announce-item
                        .latestBlogSlug=${this.__latestBlogSlug}
                        .latestBlogTitle=${this.__latestBlogTitle}
                    ></xf-announce-item>
                    <header class="header-view">
                        <xf-header .currentRoute=${this.currentRoute}></xf-header>
                    </header>
                    <main id="outlet"></main>
                    <footer class="footer-view">
                        <xf-footer></xf-footer>
                    </footer>
                </div>
            </div>
        `;
    }
}
