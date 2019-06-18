const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const config = {
    //inform webpack we are building bundle for node, not browser
    target: 'node',
    //Tell webpack of root file of application
    entry: './src/index.js',
    //tell webpack where to put output file, __dirname is current working directory
    output: {filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')}
}

module.exports = merge(baseConfig, config)