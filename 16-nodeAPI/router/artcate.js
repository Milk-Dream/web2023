//这是文章分类的路由模块
const express = require("express")

const router = express.Router()

//导入文章分类列表数据的处理函数
const artcate_handler = require("../router_handler/artcate")
//导入数据验证中间件
const expressJoi = require("@escook/express-joi")
//导入需要验证的规则对象
const {add_cate_schema,delete_cate_schema,get_cate_schema,update_cate_schema} = require("../schema/artcate")


//获取文章分类列表数据的路由
router.get("/cates", artcate_handler.getArtCates)
router.post("/addcates",expressJoi(add_cate_schema),artcate_handler.addArticleCates)
//根据id删除文章分类的路由
router.get("/deletecate/:id",expressJoi(delete_cate_schema),artcate_handler.deleteCateById)
//根据Id获取文章分类路由
router.get("/cates/:id",expressJoi(get_cate_schema),artcate_handler.getArtCateById)
//根据ID更新文章分类的路由
router.post("/updatecate",expressJoi(update_cate_schema),artcate_handler.updateCateById)
module.exports = router