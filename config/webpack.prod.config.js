const path = require('path');

const { merge } = require('webpack-merge');

// Plugins
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.base.config');

const prodConfiguration = (env) => {
    return merge([
        {
            optimization: {
                minimize: true,
                minimizer: [new TerserPlugin()],
            },
        },
    ]);
};

module.exports = (env) => {
    return merge(baseConfig(env), prodConfiguration(env));
};
