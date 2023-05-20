const fs = require("fs")

//出现路径拼接错误的问题，是因为提供了./或者../开头的相对路径
//如果要解决这个问题，请直接提供一个完整文件存放路径
/* fs.readFile("./数据.txt", "utf8", function(err, dataStr) {
    if(err) {
        return console.log("文件读取失败!失败原因:"+err.message)
    }
    console.log("读取文件成功:"+dataStr)
}) */

//移植性非常差，不利于维护
/* fs.readFile("E:\\BaiduNetdiskDownload\\黑马程序员 - 前端课\\00黑马Web作业\\13-nodejs\\数据.txt", "utf8", function(err, dataStr) {
    if(err) {
        return console.log("文件读取失败!失败原因:"+err.message)
    }
    console.log("读取文件成功:"+dataStr)
}) */

//__dirname表示当前文件所处的目录
fs.readFile(__dirname + "/数据.txt", "utf8", function(err, dataStr) {
    if(err) {
        return console.log("文件读取失败!失败原因:"+err.message)
    }
    console.log("读取文件成功:"+dataStr)
})