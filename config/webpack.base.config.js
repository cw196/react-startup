const path = require('path');

const webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");

module.exports = env => {

    return merge ([
        {
            entry: "src/index.tsx",
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    },
                    {
                        test: /\.tsx?$/,
                        loader: "ts-loader",
                        exclude: /node_modules/
                    }
                ]
            },
            devtool: "source-map",
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
                },
                extensions: [ '.tsx', '.ts', '.js' ]
            },
        }
    ])

};