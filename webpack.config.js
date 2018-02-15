const path = require("path");

module.exports = {
    entry: "./src/index.tsx",

    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "public")
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            {
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "source-map-loader"
            }
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        inline: true,
        compress: true,
        hot: true,
        port: 9000
    }
};