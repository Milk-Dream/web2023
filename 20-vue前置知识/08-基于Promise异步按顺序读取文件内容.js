import thenFs from "then-fs"

thenFs.readFile("./01.txt", "utf-8").then((r1)=>{
    console.log(r1)
    return thenFs.readFile("./02.txt")
})
.then((r2)=> {
    console.log(r2)
    return thenFs.readFile("./03.txt")
})
.then((r3)=> {
    console.log(r3)
})