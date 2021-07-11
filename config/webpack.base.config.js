const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const { merge } = require('webpack-merge');

module.exports = (env) => {
    return merge([
        {
            entry: 'src/index.tsx',
            output: {
                path: path.join(__dirname, '/dist'),
                filename: 'build.js',
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                        },
                    },
                    {
                        test: /\.tsx?$/,
                        loader: 'ts-loader',
                        exclude: /node_modules/,
                    },
                    {
                        test: /\.s(a|c)ss$/,
                        use: ['style-loader', 'css-loader', 'sass-loader'],
                    },
                    {
                        test: /\.(woff|woff2|eot|ttf|svg|png|jpe?g|gif|json)$/,
                        loader: 'file-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]',
                            publicPath: 'dist/assets/',
                            outputPath: 'dist/assets/',
                        },
                    },
                ],
            },
            devtool: 'source-map',
            devServer: {
                contentBase: path.join(__dirname, 'assets'),
                contentBasePublicPath: '/',
            },
            plugins: [
                new HtmlWebpackPlugin({
                    filename: './index.html',
                    template: './src/index.html',
                }),
                new webpack.DefinePlugin({
                    'process.env.VERSION': JSON.stringify(env.VERSION),
                    'process.env.PLATFORM': JSON.stringify(env.PLATFORM),
                }),
                new CopyWebpackPlugin({
                    patterns: [{ from: 'assets', to: 'assets' }],
                }),
            ],
            resolve: {
                alias: {
                    src: path.resolve(__dirname, '../src/'),
                },
                extensions: ['.tsx', '.ts', '.js'],
            },
        },
    ]);
};
