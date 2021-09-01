const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const devConfig = {
    mode: "development",
    devtool: 'inline-source-map',
    output: {
        filename: 'static/js/[name].bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                ],
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './dist',
    },
}

module.exports = merge(baseConfig, devConfig);