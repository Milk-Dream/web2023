//1.导入fs模块
const fs = require("fs")

//2.调用fs.readFile()方法读取文件
// 参数1:读取文件的存放路径
// 参数2:读取文件时候采用的编码格式
// 参数3:回调函数，可以拿到读取失败和成功的结果 err dataStr
fs.readFile("./数据.txt", "utf8", function(err, dataStr) {
    //打印失败的结果
    //如果读取成功，则err的值为null
    //如果读取失败，则err的值为错误对象，dataStr的值为undefined
    console.log(err)
    console.log("-----")
    //2.2打印成功的结果
    console.log(dataStr)
})
