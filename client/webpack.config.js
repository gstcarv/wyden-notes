const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../server/public"),
        clean: true,
    },
    devServer: {
        port: 8085,
        compress: true,
        allowedHosts: "all",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new HtmlMinimizerPlugin()],
    },
};
