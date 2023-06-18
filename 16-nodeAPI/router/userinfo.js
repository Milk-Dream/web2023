const express = require("express")

const router = express.Router()

//导入验证数据的中间件
const expressJoi = require("@escook/express-joi")
const {update_userinfo_schema} = require("../schema/user")
const userinfo_handler = require("../router_handler/userinfo")
//挂载路由
//获取用户信息的基本路由模块
router.get("/userinfo", userinfo_handler.getUserInfo)
router.post("/userinfo",expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo)
module.exports = router





