/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Route } from "@vaadin/router";
import "../routes/default/defaultRoute";
import "../routes/articles/articles";
import "../routes/aboutus/aboutus";
import "../routes/privacy-policy/privacy-policy";
import "../routes/blog-view/blog-view";
import "../routes/search/search";
import "../routes/not-found/not-found";

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
