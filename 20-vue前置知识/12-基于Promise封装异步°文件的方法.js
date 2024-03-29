import fs from "fs"

function getFile(fpath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fpath,"utf-8",(err,dataStr)=>{
            if(err) return reject(err)
            resolve(dataStr)
        })
    })
}

getFile("./01.txt").then((r1)=>{console.log(r1)}).catch(err=>{
    console.log(err);
})