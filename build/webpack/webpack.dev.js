/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const  CommonWebpackConfiguration =  require("./common/common.webpack.js");
const { resolve }  = require("path")



/**
 * Dev Server;
 * 
 * @type {import('webpack').Configuration}
 */


const devConfiguration = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
		static: resolve("./out"),
		historyApiFallback: true,
		open: false,
		liveReload: true,
		port : 5000

	},
    optimization: {
		runtimeChunk: "single",
	},
	output: {
        filename: "[contenthash].js",
        path: resolve("./out"),
        clean: true,
        publicPath: "/",

    },
};

const configuration = Object.assign(devConfiguration,CommonWebpackConfiguration)

module.exports = configuration;