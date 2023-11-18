const path = require('path');

/** @type {import('webpack').Configuration} */

module.exports = {
    mode: 'production',
    entry: "./js/dashboard_main.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
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
    }
}