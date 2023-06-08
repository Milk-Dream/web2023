








































const express = require("express")

const router = express.Router()

const app = express()


app.use(express.urlencoded({extended:true}))



router.get("/get", (req, res)=>{
    const query = req.query

    res.send({
        status: 0,//0代表处理成功，1代表处理失败
        msg: "GET 请求成功!", //状态的描述
        data:query//返回的数据

    })
})

router.post("/post", (req, res)=>{
    const body = req.body
    res.send({
        status:0,
        msg:"POST 请求成功",
        data:body
    })
})
router.delete("/delete", (req, res)=>{
    
    res.send({
        status:0,
        msg:"POST 请求成功"
    })
})

module.exports = router



















































































