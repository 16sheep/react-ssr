const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const config = {
    //Tell webpack of root file of application
    entry: './src/client/client.js',
    //tell webpack where to put output file, __dirname is current working directory
    output: {filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')}
}

module.exports = merge(baseConfig, config)