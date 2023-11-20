const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** @type {import('webpack').Configuration} */

module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: '[name].bundle.js',
    },
    devServer: {
        static: path.join(__dirname, './public'),
        port: 8564,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$i/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            chunks: ['header', 'body', 'footer'],
        }),
        new CleanWebpackPlugin(),
    ],
}