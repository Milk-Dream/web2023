//1.导入fs文件系统模块
const fs = require("fs")

//2.调用fs.writeFile()方法，写入文件的内容
// 参数1:表示文件的存放路径
// 参数2:表示要写入的内容
// 参数3:回调函数
fs.writeFile("./写入数据.txt", "I am from China", "utf8", function(err) {
    //2.1如果写入成功，err为null
    //2.2如果写入失败，err为错误对象
    
    if(err) {
        return console.log("文件写入失败!" + err.message)
    }
    console.log("文件写入成功!")
})