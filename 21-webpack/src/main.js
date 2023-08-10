//webpack 打包入口
import $ from "jquery"
$("#myUL > li:odd").css("color", "red")
$("#myUL > li:even").css("color", "blue")

//引入css文件
import "./css/index.css"
//引入less文件
import "./less/index.less"

//手动引入一个图片文件
//webpack里面万物皆模块
import imgObj from "./assets/bg1.png"

let theImg = document.createElement("img")
theImg.src = imgObj;
document.body.appendChild(theImg)

//8.引入字体图标的样式
import "./assets/fonts/iconfont.css"

let theI = document.createElement("i")
theI.className = "iconfont icon-qq"
document.body.appendChild(theI)

//书写高版本的js语法
const fn = ()=> {console.log("我是一个箭头函数1")}
console.log(fn);