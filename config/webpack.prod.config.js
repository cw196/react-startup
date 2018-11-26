const path = require('path');

const merge = require('webpack-merge');

// Plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.base.config');

const prodConfiguration = env => {
    return merge([
        {
            optimization: {
                minimizer: [new UglifyJsPlugin()],
            },
        },
    ]);
};

module.exports = env => {
    return merge(baseConfig(env), prodConfiguration(env));
};