const express = require("express")

const router = express.Router()

//挂载路由
router.get("/user/list", (req, res)=>{
    res.send("Get user list.")
})

router.post("/user/add", (req, res)=>{
    res.send("Add new user.")
})

//向外导出路由对象
module.exports = router
