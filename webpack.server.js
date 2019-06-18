const path = require('path')

module.exports = {
    //inform webpack we are building bundle for node, not browser
    target: 'node',
    //Tell webpack of root file of application
    entry: './src/index.js',
    //tell webpack where to put output file, __dirname is current working directory
    output: {filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')},
    //tell webpack to run babel on every file which is javascript file, stage-0 helps run async code
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options:{
                presets: [
                    'react', 'stage-0', ['env', {targets: {browsers: 'last 2 versions'}}]
                ]
            }
        }]
    }
}