const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const proConfig = {
    mode: "production",
    output: {
        filename: 'static/js/[name][contenthash:8].bundle.js',
        chunkFilename: 'static/js/[name][contenthash:8].chunk.js',
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'static/css/[name][contenthash:8].bundle.css',
            chunkFilename: 'static/css/[name][contenthash:8].bundle.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                ],
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],
    },
}

module.exports = merge(baseConfig, proConfig);