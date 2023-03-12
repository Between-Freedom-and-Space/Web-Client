const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const webpack = require('webpack'); // only add this if you don't have yet

// replace accordingly './.env' with the path of your .env file
require('dotenv').config({ path: './.env' });

module.exports = {
    mode: 'none',
    devtool: 'inline-source-map',
    entry: "./src/index.tsx",
    target: 'web',
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "source-map-loader",
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'url-loader'
            }
        ],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            favicon: path.join(__dirname, 'public', 'favicon.ico'),
        }),
        new miniCss({
            filename: 'style.css',
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
        }),
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
    }
}