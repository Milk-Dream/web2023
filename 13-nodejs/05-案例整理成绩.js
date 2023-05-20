//1.导入fs模块
const fs = require("fs")

//2.调用fs.readFile()读取文件的内容
fs.readFile("./成绩.txt", "utf8", function(err,dataStr) {
    if(err) {
        return console.log("读取文件失败!" + err.message)
    }

    //4.1先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(" ")
    //4.2循环分割后的数组，对每一项数据，进行字符串替换操作
    const arrNew = []
    arrOld.forEach(item=>{
        arrNew.push(item.replace("=", ":"))
    })
    //4.3把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join("\r\n")
    //5.调用fs.writeFile()，把处理完毕的成绩，写入到新文件中
    fs.writeFile("./成绩New.txt", newStr, "utf8", function(err) {
        if(err) {
            return console.log("文件写入失败!" + err.message)
        }
        console.log("文件写入成功!")
    })
    
    
})