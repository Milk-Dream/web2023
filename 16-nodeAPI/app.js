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
//一定要在路由之前配置解析Token的中间件
const expressJWT = require("express-jwt")
const config = require("./config")

app.use(expressJWT({secret:config.jwtSecretKey}).unless({path:[/^\/api\//]}))
//导入并且使用模块
const userRouter = require("./router/user")
app.use("/api",userRouter)
//导入并且使用用户信息的模块
const userinfoRouter = require("./router/userinfo")
app.use("/my",userinfoRouter)
//导入并使用文章分类的路由模块
const artCateRouter = require("./router/artcate")
app.use("/my/article", artCateRouter)


//定义错误级别的中间件
app.use((err,req,res,next) => {
    //验证失败导致的错误
    if(err instanceof Joi.ValidationError) {
        return res.cc(err)
    }
    //身份验证失败后的错误
    if(err.name === "UnauthorizedError") {
        return res.cc("身份验证失败!")
    }

    //未知错误
    res.cc(err)
})


app.listen(80, ()=>{
    console.log("http://127.0.0.1:80")
})

