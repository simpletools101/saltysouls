/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Router, RouterLocation, Route } from "@vaadin/router";
import { CommonEvents, IAsyncGlobalEventEmitter } from "./events";
import { formatErrorMessage } from "./errors";

export interface IXFRouter {
    /**
     * Get the Router Params and Options From the Router Location
     * Object of the Vaadin Router
     */

    getRouterParamsAndOptions(): RouterLocation | undefined;

    /**
     * Get the initial RouterParams and Options From the Router Location
     * Object of the Vaadin Router
     */

    getInitialRouterParamsAndOptions(): Promise<RouterLocation>;
    /**
     * An event fired every time navigation occurs
     */

    readonly onDidNavigate: IAsyncGlobalEventEmitter<RouterLocation>;
    /**
     * called to set an outlet
     * @param outlet
     */
    setOutlet(outlet: HTMLElement): void;

    /**
     * Used to Set the Current Routes where Navigation Will Occure
     *
     * @param routes The Routes for Navigating within
     */

    setViewRoutes(routes: Route[]): void;

    /**
     * Called to start the router
     */
    initializeRouter(): void;
}

/**
 * This a rapper arround the Vaadin Router used by the app
 * to enable Routing and Rendering correctly;
 */
export class XFRouter implements IXFRouter {
    /**
     * The routes for the app(website) navigation
     */
    private routes: Route[] = [];
    /**
     * The Outlet Container where routing is going to takeplace
     */
    private outletContainer: HTMLElement | undefined = undefined;

    /**
     * The Vaadin Router Instance
     */

    private vaadinRouterInstance: Router | undefined = undefined;

    /**
     * An event fired when Navigation occurs with the RouterLocation Params
     */

    public onDidNavigate: IAsyncGlobalEventEmitter<RouterLocation> = CommonEvents.createGlobalAsyncEventEmitter();

    public setOutlet(outlet: HTMLElement): void {
        this.outletContainer = outlet;
    }

    public setViewRoutes(routes: Route[]): void {
        this.routes = routes;
    }

    public getInitialRouterParamsAndOptions(): Promise<RouterLocation> {
        return new Promise((c) => {
            if (this.vaadinRouterInstance) {
                // We do this lazy to enable the params and options to be available in time
                setTimeout(() => {
                    c(this.vaadinRouterInstance!.location);
                }, 200);
            } else {
                formatErrorMessage(
                    "Accessing Router Param and Options With Undefined Router Instance",
                    "XF-ROUTER-MODEL"
                );
            }
        });
    }

    public getRouterParamsAndOptions(): RouterLocation | undefined {
        return this.vaadinRouterInstance?.location;
    }

    public initializeRouter(): void {
        if (this.outletContainer) {
            this.vaadinRouterInstance = new Router(this.outletContainer);
            this.vaadinRouterInstance.setRoutes(this.routes);

            //we subscribe to location change event sent by the vaadin router
            window.addEventListener("vaadin-router-location-changed", (ev) => {
                window.scrollTo({top : 0})
                this.onDidNavigate.raiseEventAsync(ev.detail.location);
            });
        } else {
            formatErrorMessage("Accessing Undefined OutletContainer", "XF-ROUTER-MODEL");
        }
    }
}

export const XFRouterModel = new XFRouter();
