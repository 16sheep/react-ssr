const path = require('path')
const merge = require('webpack-merge')
const webpackNodeExternals = require("webpack-node-externals")
const baseConfig = require('./webpack.base.js')
const config = {
    //inform webpack we are building bundle for node, not browser
    target: 'node',
    //Tell webpack of root file of application
    entry: './src/index.js',
    //tell webpack where to put output file, __dirname is current working directory
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)