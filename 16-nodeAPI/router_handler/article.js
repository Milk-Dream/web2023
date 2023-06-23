const path = require("path")
const db = require("../db/index")
exports.addArticle = (req, res)=> {
    if(!req.file || req.file.fieldname !== "cover_img") return res.cc("文章封面是必选参数!")

    //TODO:证明数据都是合法的，可以进行后续业务逻辑的处理
    //处理文章的信息对象
    const articleInfo = {
        ...req.body,
        //文章封面的存放路径
        cover_img:path.join("/uploads",req.file.filename),
        //文章发布时间
        pub_date:new Date(),
        //文章作者的ID
        author_id:req.user.id
    }

    const sql = "insert into ev_articles set ?"
    db.query(sql, articleInfo, (err, results)=> {
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc("发布文章失败!")
        res.cc("发布文章成功", 0)
    })

}