const express = require("express")
const router = express.Router()

const article_handler = require("../router_handler/article")

const multer = require("multer")
const path = require("path")

//创建multer的实列
const uploads = multer({dest:path.join(__dirname,"../uploads")})

//导入验证数据的中间件
const expressJoi = require("@escook/express-joi")
//导入需要验证的规则对象
const {add_article_schema} = require("../schema/article")


//发布文章的路由
router.post("/add",uploads.single("cover_img"),expressJoi(add_article_schema),article_handler.addArticle)


module.exports = router