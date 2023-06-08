const express = require("express")

const app = express()

const router = require("./16-apiRouter")
//必须在配置cors中间件之前配置jsonp的接口
app.get("/api/jsonp",(rea, res)=>{
    //TODO 定义JSONP接口具体的实现过程
    //1.得到函数的名称
    const funcname = req.query.callback
    //定义要发送到客户端的数据对象
    const data = {name: 'zs', age: 22}
    //拼接一个函数的调用
    const scriptStr = `${funcname}(${JSON.stringify(data)})`
    //把拼接的字符串发送给客户端
    res.send(scriptStr)
})

//npm install cors
const cors = require("cors")
//解决跨域问题
app.use(cors)
app.use("/api", router)


app.listen(80, ()=>{
    console.log("http://127.0.0.1:80")
})
























































