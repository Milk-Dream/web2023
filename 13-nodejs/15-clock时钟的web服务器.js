//导入http模块
const http = require("http")
//导入fs模块
const fs = require("fs")
//导入path模块
const path = require("path")

//创建web服务器模块
const server = http.createServer()

//监听web服务器
server.on("request", function(req, res) {
    //获取客户端请求的url地址
    const url = req.url
    //吧请求的URL地址映射到具体的文件存放路径
    //const fpath = path.join(__dirname, url)
    let fpath = ""
    if(url === "/") {
        fpath = path.join(__dirname, "./index.html")
    } else {
        fpath = path.join(__dirname, "./clock",url)
    }
    //根据映射到的文件来读取文件的内容
    fs.readFile(fpath, "utf8", function(err, dataStr) {
        if(err) return res.end("404 Not found.")
        res.end(dataStr)
    })
})

//启动服务器
server.listen(80, ()=>{
    console.log("server running at http://127.0.0.1");
})


