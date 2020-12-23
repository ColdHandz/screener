const path = require('path')
const argv = require('yargs').argv
const TerserPlugin = require('terser-webpack-plugin')
// const StyleLintPlugin = require('stylelint-webpack-plugin')
// const WebpackNotifierPlugin = require('webpack-notifier')
// const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: [
        './client/index.js'
    ],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: argv.mode == 'production',
        minimizer: [
            new TerserPlugin({
                parallel: false,
                extractComments: false,
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.(scss)$/,
                exclude: [/node_modules/],
                use: [
                    { loader: 'vue-style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.(sass)$/,
                use: [
                    { loader: 'vue-style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true,
                            sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.(styl|stylus)$/,
                use: [
                    { loader: 'vue-style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'stylus-loader' }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.css',
            '.sass'
        ],
        alias: {
            '@': path.resolve(__dirname, './client/app'),
        }
    }
}