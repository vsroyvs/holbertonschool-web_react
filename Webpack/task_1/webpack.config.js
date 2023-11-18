const path = require('path');

/** @type {import('webpack').Configuration} */

module.exports = {
    mode: 'production',
    entry: "./js/dashboard_main.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
}