/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { XFRouterModel } from "../lib/controllers/xf-router";
import { routes } from "./subs/routes";
import { MetaDataFrameManager } from "../lib/controllers/metaData";
import {
    IResourcesContext,
    IResources,
    Resources,
} from "./context/resourcesContext";
import { RequestsModel, IRequestsContext } from "./context/requestsModel";
import { provide } from "@lit/context";
import type { TRoutes } from "../../types/routes";
import "./subs/pch";


@customElement("xf-web-main")
export class WebMain extends LitElement {
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
     * Provide global data for components
     */
    /**
     * Initialize the ResourcesContext for resources
     */
    @provide({ context: IResourcesContext }) resourcesContext: IResources =
        Resources;

    /**
     * Initialize RequestsContext for fetching BlogData
     */
    @provide({ context: IRequestsContext }) requestsContext: RequestsModel =
        new RequestsModel();

    /**
     * Setup the router Model including the routes that belong to the routeModel
     */
    private intializeXFModelRouter() {
        XFRouterModel.setOutlet(this.routerOutletContainer());
        XFRouterModel.setViewRoutes(routes)
        XFRouterModel.initializeRouter();
    }

    /**
     * Attach a listener to update the currentRoute based on the RouteLocationParams
     */
    private listenForParamAndOptionsChange() {
        XFRouterModel.onDidNavigate.subscribeAsync((args) => {
            this.currentRoute = args.pathname! as TRoutes;
        });
    }

    /**
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

    /**
     * Initialize Web MetaData
     */

    private registerMetaDataFrame() {
        let Frame = MetaDataFrameManager;
        Frame.setCurrentRoute(this.currentRoute);
        Frame.setMetaDataFrame("/", {
            title: "SaltySouls",
            description:
                "Welcome to The SaltySouls, your digital haven for real-life stories, genuine inspiration, and the transformative power of faith. We believe in the extraordinary impact that sharing personal experiences can have on shaping lives. This is more than just a blog; it's a sanctuary where we navigate the twists and turns of life, armed with the wisdom of the Word and the strength of prayer.",
            keywords: [
                "SaltySouls",
                "faith stories",
                "real-life experiences",
                "digital haven",
                "inspiration blog",
                "transformative faith",
                "wisdom of the Word",
                "personal growth",
                "youth empowerment",
                "Christian living",
                "faith journey",
                "inspirational content",
                "faith-based blog",
                "genuine inspiration",
                "spiritual strength",
                "digital sanctuary",
                "life lessons",
                "faith community",
                "positive living",
                "faith reflections",
                "impactful stories",
                "Christian youth",
                "spiritual guidance",
                "authenticity",
                "Christian inspiration",
                "inspirational writing",
                "personal narratives",
                "faith in action",
            ],
        });
        Frame.setMetaDataFrame("/articles", {
            title: "SaltySouls | Articles",
            description: "SaltySouls Articles",
        });

        Frame.setMetaDataFrame("/aboutus", {
            title: "SaltySouls | About us",
            description:
                "At The SaltySouls, our mission is simple yet profound - to change lives by sharing authentic life situations and demonstrating how an unwavering connection to the Word of God and a prayerful life can be transformative. We understand the power of relatable stories, and we strive to create a community where every reader finds solace, inspiration, and a sense of purpose.",
        });

        Frame.setMetaDataFrame("/privacy-policy", {
            title: "SaltySouls | Privacy Policy",
            description: "This page contains SaltySouls privacy policies.",
        });

        Frame.setMetaDataFrame("/search", {
            title: "SaltySouls | Searh Articles",
            description: "",
        });

        Frame.initializeMetaDataFrameWork();
    }

    private initializeRequestContext() {
        this.requestsContext.__intialize__();

        //request the articles card async 
        //This enables us to update the latest blog title and slug

        this.requestsContext.__articleCardsPromise.__cowait().then((v)=>{
            let _latestBlog = v[0];
            this.__latestBlogSlug = _latestBlog.slug;
            this.__latestBlogTitle = _latestBlog.title
        })
    }

    override firstUpdated() {
        if (!this.didInitialize) {
            this.initializeRequestContext();
            this.intializeXFModelRouter();
            this.updateRouteParamsAndOptions()
            this.listenForParamAndOptionsChange();
            this.registerMetaDataFrame();
        }
    }

    public routerOutletContainer() {
        return this.shadowRoot?.querySelector("#outlet")! as HTMLDivElement;
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
                        <xf-header
                            .currentRoute=${this.currentRoute}
                        ></xf-header>
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
