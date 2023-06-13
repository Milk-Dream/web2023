const express = require("express")


const app = express()


const session = require("express-session")

app.use(session({
    secret:"itheima",
    resave:false,
    saveUninitialized:true,
}))

app.use(express.static("./pages"))

app.use(express.urlencoded({extended:false}))

app.post("/api/login", (req, res)=>{
    if(req.body.username !== "admin" || req.body.password !== "000000") {

        return res.send({status:1,msg:"登录失败"})
    }
    req.session.user = req.body
    req.session.islogin = true
    res.send({status:0,msg:"登录成功"})
})




app.get("/api/username", (req, res)=> {
    if(!req.session.islogin) {
        return res.send({status:0, msg:"fail"})
    }

    res.send({
        status:0,
        msg:"success",
        username:req.session.user.username
    })
})


app.post("/api/logout", (req, res)=>{
    req.session.destroy()
    res.send({
        status:0,
        msg:"退出登录成功"
    })
})


app.listen(80,()=>{
    console.log("http://127.0.0.1:80")
})



