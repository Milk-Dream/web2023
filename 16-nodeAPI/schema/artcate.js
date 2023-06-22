const joi = require("@hapi/joi")

//定义name和alias的验证规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()

//
const id = joi.number().integer().min(1).required()

//向外共享验证规则对象
module.exports.add_cate_schema = {
    body:{
        name,
        alias
    }
}

//验证规则对象 - 删除分类
exports.delete_cate_schema = {
    params: {
        id
    }
}

//验证规则对象 - 根据ID获取分类
exports.get_cate_schema = {
    params: {
        id
    }
}

//验证规则对象 - 更新文章
exports.update_cate_schema = {
    body:{
        Id:id,
        name,
        alias
    }
    
}