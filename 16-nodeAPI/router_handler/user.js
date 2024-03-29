//导入数据库操作模块
const db = require("../db/index")
//导入bcryptjs
const bcrypt = require("bcryptjs")
//用这个包生成Token字符串
const jwt = require("jsonwebtoken")

const config = require("../config")

//注册新用户的处理函数
exports.regUser = (req, res)=>{
    //获取客户端提交到服务器的用户信息
    const userinfo = req.body
    //对表单中的数据进行合法性校验
    if(!userinfo.username || !userinfo.password) {
        /*res.send({
            status:1,
            message:"用户名或密码不合法!"
        })*/
        
        
        
        
        
        
        return res.cc("用户名或密码不合法")
    }


    //定义SQL语句,查询用户名是否占用
    const sqlStr = "select * from ev_users where username=?"
    db.query(sqlStr, userinfo.username, (err, results)=>{
        //执行SQL语句失败
        if(err) {
            //return res.send({status:1,message:err.message})
            return res.cc(err)
        }
        //判断用户名是否占用
        if(results.length > 0) {
            //return res.send({status:1,message:"用户名被占用,请更换其他用户名"})
            return res.cc("用户名被占用，请更换其他用户名")
        }
        //调用bcrypt.hashSync()对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        const sql = "insert into ev_users set ?"
        //调用db.query()执行sql语句
        db.query(sql,{username:userinfo.username,password:userinfo.password},(err, results)=>{
            if(err) {
                /*return res.send({
                    status: 1,
                    message: err.message
                })*/
                return res.cc(err)
            }
            if(err.affectedRows != 1) {
                /*return res.send({
                    status:1,
                    message:"注册用户失败，请稍后再试!"
                })*/

                return res.cc("注册用户失败，请稍后再试!")
            }
            //注册成功
            /*res.send({
                status:0,
                message:"注册成功"
            })*/
            res.cc("注册成功!",0)
        })
    })
    res.send("reguser ok")
}
//登录的处理函数
exports.login = (req, res)=>{
    //接收表单的数据
    const userinfo = req.body
    //定义SQL语句
    const sql = "select * from ev_users where username = ?"
    db.query(sql, userinfo.username, (err, results)=>{

        if(err) return res.cc(err)
        //执行SQL语句失败

        if(results.length !== 1) return res.cc("登录失败!")

        //TODO:判断密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.password,results[0].password)
        if(!compareResult) {
            return res.cc("登录失败!")
        }


        //TODO:在服务器端生成token字符串
        const user = {...results[0], password:"",user_pic:""}
        const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn:config.expiresIn})
        res.send({
            status:0,
            message:"登录成功",
            token: "Bearer "+tokenStr
        })
    })
    
}


































































