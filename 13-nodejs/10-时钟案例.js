//1.导入fs模块
const fs = require("fs")
//2.导入path模块
const path = require("path")

//定义正则表达式,分别匹配<style></style>和<script></script>

const regStyle = /<style>[\s\S]*?<\/style>/
const regScript = /<script>[\S\s]*?<\/script>/

//3.调用fs.readFile方法读取文件
fs.readFile(path.join(__dirname,"index.html"), "utf8", function(err, dataStr) {
    if(err) {
        return console.log("读取HTML文件失败!" + err.message)
    }
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})
//处理HTML脚本
function resolveHTML(htmlStr) {
    //将字符串调用replace方法,把内嵌的style和script标签,替换为外联的link和script
    const newHTML = htmlStr.replace(regStyle,"<link rel='stylesheet' href='./index.css'>").replace(regScript, "<script src='./index.js'></script>")
    //写入到index.html
    fs.writeFile(path.join(__dirname, "indexNew.html"), newHTML, "utf8", function(err) {
        if(err) {
            return console.log("写入HMTL文件失败!"+err.message)
        }
    })
}


//处理JS脚本
function resolveJS(htmlStr) {
    //通过正则提取对应的<script></script>标签里面的内容
    const r2 = regScript.exec(htmlStr)
    //将提取的脚本字符串,做进一步处理
    const newJS = r2[0].replace("<script>", "").replace("</script>", "")
    //将处理的结果,写入到目录中的index.js文件里面
    fs.writeFile(path.join(__dirname, "index.js"), newJS, "utf8", function(err) {
        if(err) {
            return console.log("写入JavaScript脚本失败!" + err.message)
        }

    })
}


//定义用来处理CSS样式的方法
function resolveCSS(htmlStr) {
    //使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    //将提取出来的样式字符串,进行字符串的replace替换操作
    const newCSS = r1[0].replace("<style>","").replace("</style>", "")
    //调用fs.writeFile()方法,将提取的样式,写入到clock目录中的index.css的文件里面
    fs.writeFile(path.join(__dirname,"index.css"),newCSS,"utf8", function(err) {
        if(err) {
            return console.log("写入CSS样式失败!" + err.message)
        }
        console.log("写入样式文件成功!")
    })
}