/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin")
const { resolve } = require("path")
require('dotenv').config()

/**
 * Build Configuration
 * 
 * @type {import('webpack').Configuration}
 */


const buildConfiguration = {
    mode: "production",
    target: "web",
    entry: {
        "salty.main": resolve("./src/app/build.ts")
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
        new webpack.BannerPlugin({
            raw : true,
            banner: `
            /*---------------------------------------------------------------------------------------------
            *  Copyright (c) Simple Tools. All rights reserved.
            *  Licensed under the MIT License. See License.txt in the project root for license information.
            *--------------------------------------------------------------------------------------------*/           
            `,
            include: /\.(js |css|ts)/
        }),
        new CopyPlugin({
            patterns : [
                {
                    from : resolve("./src/app/public/assets/favicon"),
                    to : resolve("./public/assets/favicon")

                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename : "evm/[contenthash].css"
        }),
        new webpack.EnvironmentPlugin(['SALTY_SOULS_CMS']),
        new HtmlWebpackPlugin({
            title: "SaltySouls",
            cache: true,
            minify: false,
            template: resolve("./src/app/templates/index.html"),
            inject: "body",
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|ttf|svg|jpeg|jpg|webp)/,
                type: "asset/resource",
            },
           
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments : false,
            }),
            new CssMinimizerPlugin()
        ]
    },
    output: {
        filename: "evm/[contenthash].js",
        path: resolve("./public"),
        clean: true,
        publicPath: "/",
        assetModuleFilename : 'assets/common/[contenthash][ext][query]',
        cssFilename : 'evm/[contenthash][ext]',
        chunkFilename : 'evm/[contenthash][ext]',

    },


};

const configuration = buildConfiguration;

module.exports = configuration;