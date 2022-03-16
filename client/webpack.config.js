const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8085
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './index.html'
        })
    ]
}