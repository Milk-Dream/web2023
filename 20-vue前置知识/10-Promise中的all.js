import thenFs from "then-fs"

const promiseArr = [
    thenFs.readFile("./01.txt", "utf-8"),
    thenFs.readFile("./02.txt", "utf-8"),
    thenFs.readFile("./03.txt", "utf-8")
]

Promise.all(promiseArr).then(result=>{
    console.log(result)
})