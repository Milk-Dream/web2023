//导入自定义验证规则的包
const joi = require("@hapi/joi")

//定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required()

const password = joi.string().pattern(/^[\S]{6,12}$/).required()

//定义验证注册和登录表单数据的规则对象

//定义id,nickname,email的验证规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const user_email = joi.string().email().required()


module.exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email:user_email
    }
}

module.exports.reg_login_schema = {
    body: {
        username,
        password,
    }
}