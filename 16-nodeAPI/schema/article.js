const joi = require("@hapi/joi")

//分别定义标题、分类ID、内容、发布状态
const title = joi.string().required()
const cate_id = joi.number().integer().min(1).required()
const content = joi.string().required().allow("")
const state = joi.string().valid("已发布","草稿").required()

//验证规则对象 - 发布文章
exports.add_article_schema = {
    body: {
        title,
        cate_id,
        content,
        state
    }
}