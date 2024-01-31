/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const DotenvWebpackPlugin = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve }  = require("path")
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin")


/**
 * Dev Server;
 * 
 * @type {import('webpack').Configuration}
 */


const CommonWebpackConfiguration = {
    
    target: "web",
    entry: {
        "garage": resolve("./src/app/build.ts")
    },
    resolve: {
        extensions: [".ts", ".js"],
        plugins: [
            new TsconfigPathsPlugin({
                baseUrl: resolve("./"),
                configFile: resolve("./tsconfig.json")
            })
        ],
        
    },
    plugins: [
        new DotenvWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "SaultySouls",
            cache: true,
            template: resolve("./src/app/templates/index.html"),
            inject: "body",
            favicon: resolve("./src/app/public/assets/favicon.png")
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|ttf|svg|jpeg|jpg)/,
                type: "asset",
            },
            {
                test: /\.wasm/,
                type: "asset/inline"
            }
        ]
    },
  
}

module.exports = CommonWebpackConfiguration;
