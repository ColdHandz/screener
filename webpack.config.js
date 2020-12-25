const path = require('path')
const argv = require('yargs').argv
const TerserPlugin = require('terser-webpack-plugin')
// const HtmlWebpackPlugin = require("html-webpack-plugin")
// const StyleLintPlugin = require('stylelint-webpack-plugin')
// const WebpackNotifierPlugin = require('webpack-notifier')

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
                test: /\.(s(a|c)ss)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin()
    ],
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