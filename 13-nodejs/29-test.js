const itheima = require("./itheima-tools")

//格式化时间
const dt = new Date()
console.log(itheima.dateFormat(dt))

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = itheima.htmlEscape(htmlStr)
console.log(str);
console.log(itheima.htmlUnEscape(str))