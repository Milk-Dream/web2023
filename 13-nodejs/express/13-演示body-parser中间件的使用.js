const express = require("express")

const app = express()

//通过express.json()这个中间件，解析表单中的JSON格式数据
const parser = require("body-parser")


app.use(parser.urlencoded({extended:false}))

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