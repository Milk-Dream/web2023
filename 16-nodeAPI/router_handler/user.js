//导入数据库操作模块
const db = require("../db/index")
//注册新用户的处理函数
exports.regUser = (req, res)=>{
    //获取客户端提交到服务器的用户信息
    const userinfo = req.body
    //对表单中的数据进行合法性校验
    if(!userinfo.username || !userinfo.password) {
        res.send({
            status:1,
            message:"用户名或密码不合法!"
        })
    }


    //定义SQL语句,查询用户名是否占用
    const sqlStr = "select * from ev_users where username=?"
    db.query(sqlStr, userinfo.username, (err, results)=>{
        //执行SQL语句失败
        if(err) {
            return res.send({status:1,message:err.message})
        }
        //判断用户名是否占用
        if(results.length > 0) {
            return res.send({status:1,message:"用户名被占用,请更换其他用户名"})
        }
        //TODO 用户名可用,后续操作
    })
    res.send("reguser ok")
}
//登录的处理函数
exports.login = (req, res)=>{
    res.send("login ok")
}


































































