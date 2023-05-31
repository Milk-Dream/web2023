//这是包的入口文件
// function dateFormat(dateStr) {
//     const dt = new Date(dateStr)
//     const y = dt.getFullYear()
//     const m = padZero(dt.getMonth())
//     const d = padZero(dt.getDate())

//     const hh = padZero(dt.getHours())
//     const mm = padZero(dt.getMinutes())
//     const ss = padZero(dt.getSeconds())

//     return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
// }

// //补零的方法
// function padZero(n) {
//     return n > 9 ? n : "0" + n
// }


// function htmlEscape(htmlStr) {
//     return htmlStr.replace(/<|>|"|&/g,(match)=>{
//         switch(match) {
//             case "<":
//                 return "&lt;"
//             case ">":
//                 return "&gt;"
//             case '"':
//                 return "&quot;"
//             case "&":
//                 return "&amp;"
//         }
//     })
// }

// function htmlUnEscape(str) {
//     return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match)=>{
//         switch(match) {
//             case "&lt;":
//                 return "<"
//             case "&gt;":
//                 return ">"
//             case '&quot;':
//                 return '"'
//             case "&amp;":
//                 return "&"

//         }
//     })
// }

const date = require("./dateFormat")
const escape = require("./htmlEscape")

module.exports = {
    ...date,
    ...escape
}