const resolve = require("path").resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, "../", "index.js"),
    output: {
        path: resolve(__dirname, "../", "dist"),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'jsx',  // Remove this if you're not using JSX
                    target: 'es2015'  // Syntax to compile to (see options below for possible values)       }
                },
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: resolve(__dirname, "../", "public/index.html") }),
    ],
}

