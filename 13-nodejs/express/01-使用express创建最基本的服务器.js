//npm i express@4.17.1

const express = require("express")

//创建web服务器
const app = express()

//监听客户端的GET和POST请求,并向客户端响应具体的内容
app.get("/user", (req, res)=>{
    //调用express提供的res.send方法,向客户端响应一个json对
    res.send({name:"zs",age:20,gender:"男"})
})

app.post("/user", (req,res)=>{
    //调用express提供的res.send()方法,向客户端响应一个字符串
    res.send("请求成功")
})

app.get("/", (req, res)=>{
    console.log(req.query);
    res.send(req.query)
})

app.get("/user/:id/:name", (req, res)=>{
    console.log(req.params);
    res.send(req.params)
})

//启动web服务器
app.listen(80, ()=>{
    console.log("express server runing at http://127.0.0.1");
})

