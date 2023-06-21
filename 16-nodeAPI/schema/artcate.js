const joi = require("@hapi/joi")

//定义name和alias的验证规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()

//向外共享验证规则对象
module.exports.add_cate_schema = {
    body:{
        name,
        alias
    }
}