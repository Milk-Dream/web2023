import thenFs from "then-fs"

thenFs.readFile("./01.txt", "utf-8").then((r1)=>{console.log(r1)})
thenFs.readFile("./02.txt", "utf-8").then((r1)=>{console.log(r1)})
thenFs.readFile("./03.txt", "utf-8").then((r1)=>{console.log(r1)})