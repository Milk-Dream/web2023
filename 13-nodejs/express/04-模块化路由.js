const express = require("express")

const app = express()

const userRouter = require("./04-router")

app.use("/api", userRouter)
//app.use是用来注册中间件的


app.listen(80, ()=>{
    console.log("http://127.0.0.1:80");
})