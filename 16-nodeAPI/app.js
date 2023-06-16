//导入express
const express = require("express")
//创建express的实列
const app = express()

//导入并且配置cors
const cors = require("cors")
app.use(cors())
//配置解析白哦的数据的中间件，只能解析application/x-www-form-urlencoded
app.use(express.urlencoded({extended:false}))
//一定要在路由之前封装res.cc的函数
app.use((req,res,next)=>{
    res.cc = function(err, status=1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

//导入并且使用模块
const userRouter = require("./router/user")
app.use("/api",userRouter)

//定义错误级别的中间件
app.use((err,req,res,next) => {
    //验证失败导致的错误
    if(err instanceof Joi.ValidationError) {
        return res.cc(err)
    }

    //未知错误
    res.cc(err)
})


app.listen(80, ()=>{
    console.log("http://127.0.0.1:80")
})

