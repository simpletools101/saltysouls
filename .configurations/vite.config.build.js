/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { resolve } from "path";

/**
 *
 * @type{import('vite').UserConfig}
 */

export default {
    resolve: {
        extensions: [".ts", ".js"],
    },
    mode: "production",
    appType: "spa",
    root: resolve("./"),
    publicDir : resolve("./src/public"),
    build : {
        outDir : "./dist",
        assetsDir : "./workbench",
        minify : "esbuild",
        cssMinify : "esbuild",
        cssCodeSplit : false,
    }
};
