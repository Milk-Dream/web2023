const fs = require("fs")

fs.readFile("./数据.txt", "utf8", function(err, dataStr) {
    if(err) {
        return console.log("文件读取失败!" + err.message)
    }
    console.log("读取文件成功!" + dataStr)
    
})