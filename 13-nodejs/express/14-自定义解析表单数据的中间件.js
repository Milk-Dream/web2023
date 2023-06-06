const { log } = require("console")
const express = require("express")

const app = express()

//导入node.js内置模块
const qs = require("querystring")

//通过express.json()这个中间件，解析表单中的JSON格式数据
app.use((req, res, next)=>{
    let str = ""
    req.on("data", (chunk)=>{
        str+=chunk
    })
    //监听req的end事件
    req.on("end", ()=>{
        const body = qs.parse(str)
        console.log(body);
        req.body = body;
    })
    next()
})

app.get("/",  (req,res)=>{
    res.send("GET Request")
})

app.post("/", (req, res)=>{
    //在服务器，可以使用req.body这个属性，来接收客户端发送过来的请求体数据
    //默认情况，如果不配置解析表单的中间件默认req.body为undefined
    res.send("POST Request")
})



app.listen(80, ()=>{
    console.log("http://127.0.0.1:80");
})











































































