//导入express
const express = require("express")
//创建express的实列
const app = express()

//导入并且配置cors
const cors = require("cors")
app.use(cors())
//配置解析白哦的数据的中间件，只能解析application/x-www-form-urlencoded
app.use(express.urlencoded({extended:false}))

//导入并且使用模块
const userRouter = require("./router/user")
app.use("/api",userRouter)


app.listen(80, ()=>{
    console.log("http://127.0.0.1:80")
})

