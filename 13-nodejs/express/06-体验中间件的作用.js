







const express = require("express")

const app = express()


// //定义一个最简单的中间件函数
// const mw = function(req, res, next) {
    
//     console.log("这是最简单的中间件");
//     //把流转关系,转交给下一个中间件或者路由
//     next()
// }

// //将mw注册为全局生效的中间件
// app.use(mw)

app.use((req, res, next)=>{
    console.log("这是最简单的中间件函数");
    const time = Date.now()
    //为req对象,挂载自定义属性,从而把时间共享给后面的所有路由
    req.startTime = time
    next()
})


app.get("/", (req, res)=>{
    res.send("GET Request"+ req.startTime)
})

app.post("/", (req, res)=>{
    res.send("POST Request"+ req.startTime)
})


app.listen(80, ()=>{
    console.log("http:127.0.0.1:80");
})






















