const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:"./src/main.js",//入口
    output: {
        //出口
        path:path.resolve(__dirname,"dist"),//出口路径文件夹名字
        filename:"bundle.js",//出口文件名字(代码打包进这里)
    },
    plugins:[new HtmlWebpackPlugin({
        template:"./public/index.html"//告诉webpack使用插件时候，以我们自己的html文件作为模板去
    })]
}