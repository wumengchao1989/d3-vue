/**
 * Created by wumengchao on 2018/2/19.
 */
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [__dirname + '/src/index.js', __dirname + '/src/promise.js', __dirname + '/src/underscore.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8989
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.sass$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'sass-loader'}, {loader: 'css-loader'}, {loader: 'style-loader'}
                ]
            }, {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader:'vue-loader'
            }],
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        })
    ]
}