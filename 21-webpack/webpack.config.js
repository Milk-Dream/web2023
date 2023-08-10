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
    })],
    module: {//加载器配置
        rules:[//规则
            {//一个具体的规则对象
                test:/\.css$/i,//匹配.css结尾的文件
                use:["style-loader","css-loader"]//让webpack使用这两个loader处理css文件
                //从右到左的,所以不能颠倒顺序
                //css-loader:webpack解析css文件-把css代码一起打包进js中
                //style-loader:css代码插入dom中

            },
            {
                test:/\.less/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                //图片文件的配置(仅适用于webpack5版本)
                test: /\.(gif|png|jpg|jpeg)/,
                type:"asset"//匹配上面的文件后,webpack
                //如果你设置的是asset模式
                //以8kb大小区分图片文件
                //小于8kb的把图片转换为base64
                //直接吧图片输出dist目录
                //
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                type:"asset/resource", //所有的字体图标文件,都输出到dist下
                generator: {
                    filename:"font/[name].[hash:6][ext]"//ext会替换成.eot/.woff
                }

            },
            {
                test:/\.m?js$/,
                exclude:/(node_modules|bower_components)/,//不去匹配这些文件夹下的文件
                use: {
                    loader: "babel-loader",//使用这个loader处理js文件
                    options: {//加载器选项
                        presets:["@babel/preset-env"]//预设;@babel/preset-env降级规则-按照这里的规则降级我们的js语法

                    }
                }
            }
        ]
    }
}