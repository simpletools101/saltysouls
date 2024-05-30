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
    mode: "development",
    publicDir : resolve("./src/assets"),
    appType: "spa",
    root: resolve("./"),
};
