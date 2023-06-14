const express = require("express")
const app = express()




//安装并且导入JWT相关的两个包,分别是jsonwebtoken和express-jwt
const jwt = require("jsonwebtoken")
const expressJWT = require("express-jwt")


//允许跨域资源共享
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(cors())


//解析post表单数据的中间件
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))

//定义secret秘钥
const secretKey = "xiaobaailaoshiTeacher199908"

//注册将JWT字符串转换为json对象的中间件，unless全是不需要访问权限的地址

//只要配置成功了express-jwt这个中间件
app.use(expressJWT({secret:secretKey}).unless({path:[/^\/api\//]}))


app.post("/api/login", function(req, res){
    const userinfo = req.body
    if(userinfo.username !== "admin" || userinfo.password!== "123456") {
        return res.send({
            status:400,
            message:"登录失败!"
        })
    }
    //在登录成功之后,调用jwt.sign()方法生成JWT字符串.并且通过token属性发送给客户端
    //参数1:用户的信息对象
    //参数2:加密的秘钥
    //参数3:配置对象,可以配置当前token的有效期
    //注意,不要把密码加密到jwt
    const tokenStr = jwt.sign({username:userinfo.username},secretKey,{expiresIn:"30s"})
    res.send({
        status:200,
        msg:"登录成功",
        token:tokenStr//要发送给客户端的token
    })



})
app.get("/admin/getInfo", (req,res)=>{
    console.log(req.user)

    res.send({
        status: 200,
        msg:"获取用户信息成功!",
        data:req.user
    })
})

//使用全局错误处理中间件,捕获解析JWT失败后产生的错误
app.use((err,req,res,next)=>{

    if(err.name === "UnauthorizedError") {
        return res.send({
            status: 401,
            msg:"无效的token"
        })
    }

    res.send({status:500,msg:"未知的错误"})
})











