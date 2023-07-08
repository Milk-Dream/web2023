//引入express
const express = require("express")
const path = require("path")
//导入模板
const template = require("art-template")

//创建一个应用实列
const app = express()

//链接数据库
require("./model/connect")

//托管静态资源
app.use(express.static("public"))

//当渲染art模板时候,使用express-art-template
app.engine("art", require("express-art-template"))
//设置模板缓存目录
app.set("views",path.join(__dirname,"views"))
//渲染模板时候不写后缀,默认拼接art后缀
app.set("view engine", "art")

//创建首页路由
app.get("/", require("./router/index"))
//创建音乐上传的路由
app.get("/upload", require("./router/upload"))
//创建音乐上传的post路由
app.post("/upload_post", require("./router/upload_post"))


//监听一个端口,启动服务器
app.listen(80, ()=>{
    console.log("服务器启动成功,请访问http://127.0.0.1:80")
})