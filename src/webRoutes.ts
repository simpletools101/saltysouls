/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Route } from "@vaadin/router";
import "./pages/default/defaultRoute";
import "./pages/articles/articles";
import "./pages/aboutus/aboutus";
import "./pages/privacy-policy/privacy-policy";
import "./pages/blog-view/blog-view";
import "./pages/search/search";
import "./pages/not-found/not-found";

export const routes: Route[] = [
    {
        path: "/",
        component: "xf-route-default",
        name: "default-route",
    },
    {
        path: "/blog",
        redirect: "/articles",
        name: "unknown-article-blog",
    },
    {
        path: "/blog/:slug",
        component: "xf-blog-view",
    },
    {
        path: "/articles",
        component: "xf-route-articles",
        name: "articles-route",
    },
    {
        path: "/aboutus",
        component: "xf-route-aboutus",
        name: "aboutus-route",
    },
    {
        path: "/search",
        component: "xf-route-search",
        name: "search-route",
    },
    {
        path: "/privacy-policy",
        component: "xf-route-privacypolicy",
        name: "privacy-route",
    },
    {
        path: "(.*)",
        component: "xf-route-notfound",
        name: "not-found-route",
    },
];
