module.exports = {
    //tell webpack to run babel on every file which is javascript file, stage-0 helps run async code

    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options:{
                presets: [
                    'react', 'es2015','stage-0', ['env', {targets: {browsers: 'last 2 versions'}}]
                ]
            }
        }]
    }
}