//导入node.js内置模块
const qs = require("querystring")

const bodyParser = (req, res, next)=>{
    let str = ""
    req.on("data", (chunk)=>{
        str+=chunk
    })
    //监听req的end事件
    req.on("end", ()=>{
        const body = qs.parse(str)
        console.log(body);
        req.body = body;
    })
    next()
}
module.exports = bodyParser