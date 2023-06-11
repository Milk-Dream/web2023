
//导入mysql
const mysql = require("mysql")

//建立与mysql数据库的连接关系
const db = mysql.createPool({
    host:"127.0.0.1",//数据库的IP地址
    user:"root",//登录数据库的账号
    password:"12345",//登录数据库的密码
    database:"my_db",//指定要操作哪个数据库

})


//测试mysql模块是否能正常工作
db.query("select 1", (err, results)=>{
    //mysql模块工作期间报错了
    if(err) return console.log(err.message)
    //能够成功执行sql语句
    console.log(results)
})

//查询users表中所有的数据
const sqlStr = "select * from users"
db.query(sqlStr, (err, results)=>{
    //查询数据库失败
    if(err) return console.log(err.message)
    //查询数据库成功

    console.log(results)
})

//向users表中，新增一条数据，其中username的值为Spider-Man，password的值为pcc123
// const user = {username:"Spider-Man", password:"pcc123"}
// //定义待执行的SQL语句
// const sqlStr1 = "insert into users(username,password) values(?,?)"
// //执行SQL语句
// db.query(sqlStr1,[user.username,user.password], (err,results) => {
//     //执行sql语句失败了
//     if(err) return console.log(err.message)
    
//     //成功了
//     //注意:如果执行的是insert into 插入语句，则results是一个对象
//     //可以通过affectedRows属性，来判断是否插入数据成功
//     if(results.affectedRows === 1) {
//         console.log("插入数据成功")
//     }
// })




//演示插入数据的便捷方式
// const user = {username:"Spider-Man3", password:"pcc123"}
// //定义待执行的sql语句
// const sqlStr2 = "insert into users set ?"

// db.query(sqlStr2,user,(err,results)=>{
//     if(err) return console.log(err.message)

//     if(results.affectedRows === 1) {
//         console.log("数据插入成功")
//     }
// })

//演示如何更新用户的信息
const user1 = {id: 3, username:"ccc",password:"000"}
//定义SQL语句
const sqlStr3 = "update users set username=?,password=? where id = ?"

db.query(sqlStr3,[user1.username,user1.password,user1.id],(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows === 1) {
        console.log("数据更新成功!")
    }
})



//演示更新数据的便捷方式
const user3 = {id: 4, username:"ddd",password:"000"}
//定义sql语句
const sqlStr4 = "update users set ? where id=?"
//执行sql语句
db.query(sqlStr4,[user3,user3.id],(err,results)=>{
    if(err) return console.log(err.message)
    if(results.affectedRows === 1) {
        console.log("数据更新成功")
    }
})

//删除id为5的用户
const sqlStr5 = "delete from users where id = ?"

db.query(sqlStr5,5,(err,results)=>{
    if(err) return console.log(err.message)
    if(results.affectedRows === 5) {
        console.log("删除成功")
    }
})

//标记删除
const sqlStr6 = "update users set status=? where id=?"
db.query(sqlStr6,[1,6],(err,results)=>{
    if(err) return console.log(err.message)
    if(results.affectedRows === 1) {
        console.log("标记删除成功")
    }
})




























































