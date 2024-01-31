/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const esbuild = require('esbuild');
const { resolve } = require('path')

esbuild.build({
    entryPoints: [
        {
            in: resolve("./src/app/build.xfs.ts"),
            out: "xfs.build"
        },
    ],
    platform: 'browser',
    bundle: true,
    outdir: resolve("./out-server"),
    tsconfig: resolve("./tsconfig.json")
})

