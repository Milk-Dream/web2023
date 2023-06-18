//导入数据库操作模块
const db = require("../db/index")
//获取用户基本信息的基本处理函数
exports.getUserInfo = (req,res)=>{
    const sql = `select id,username,nickname,email,user_pic from ev_users where id=?`
    //调用db.query()执行SQL语句
    db.query(sql,req.user.id,(err,results)=>{

        if(err) return res.cc(err)
        if(results.length !== 1) return res.cc("获取用户信息失败!")

        res.send({
            status:0,
            message:"获取用户基本信息成功",
            data:results[0]
        })
    })
}
//更新用户信息的基本处理函数
exports.getUserInfo = (req, res) => {

    const sql = "update ev_users set ? where id = ?"
    db.query(sql,[req.body,req.body.id],(err,results)=>{
        if(err) return res.cc(err)

        if(results.affectedRows !== 1) return res.cc("更新用户信息失败")

        res.cc("更新用户信息成功!", 0)
    })
}















