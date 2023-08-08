import thenFs from "then-fs"

const promiseArr = [
    thenFs.readFile("./01.txt", "utf-8"),
    thenFs.readFile("./02.txt", "utf-8"),
    thenFs.readFile("./03.txt", "utf-8")
]

//只要有一个异步完成就会执行.then方法
Promise.race(promiseArr).then(result=>{
    console.log(result)
})