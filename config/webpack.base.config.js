const path = require('path');

const webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = env => {

    return merge ([
        {
            entry: ['@babel/polyfill', APP_DIR],
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    },
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    filename: './index.html',
                    template: './src/index.html',
                }),
                new webpack.DefinePlugin({
                    'process.env.VERSION': JSON.stringify(env.VERSION),
                    'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
                }),
            ],
            resolve: {
                alias: {
                    src: path.resolve(__dirname, '../src/')
                }
            },
        }
    ])

};