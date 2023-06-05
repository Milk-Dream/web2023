const express = require("express")

const app = express()

const mw = (req, res, next) => {
    console.log("调用了局部生效的中间件");
}

app.get("/", mw, (req,res)=>{
    res.send("GET Request")
})

app.post("/", (req, res)=>{
    res.send("POST Request")
})

app.listen(80, ()=>{
    console.log("http://127.0.0.1:80");
})