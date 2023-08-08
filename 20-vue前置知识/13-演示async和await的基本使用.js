import thenFs from "then-fs"
async function getAllFile() {
    console.log("B")
    const r1 = await thenFs.readFile("./01.txt","utf-8")
    console.log(r1)
    const r2 = await thenFs.readFile("./02.txt", "utf-8")
    console.log(r2)
    const r3 = await thenFs.readFile("./03.txt", "utf-8")
    console.log(r3)
    console.log("D")
}
console.log("A")
getAllFile()
console.log("C")
//A B C D