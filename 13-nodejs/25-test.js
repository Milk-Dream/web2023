//导入自定义格式化时间模块

const TIME = require("./24-dateFormat.js")

//调用方法
const dt = new Date()

const newDT = TIME.dateFormat(dt)
console.log(newDT);