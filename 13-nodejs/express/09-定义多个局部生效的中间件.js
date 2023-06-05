const express = require("express")

const app = express()

const mw1 = (req, res, next) => {
    console.log("调用了局部生效的中间件1");
}

const mw2 = (req, res, next) => {
    console.log("调用了局部生效的中间件2");
}

app.get("/", mw1, mw2, (req,res)=>{
    res.send("GET Request")
})

app.post("/",[mw1, mw2], (req, res)=>{
    res.send("POST Request")
})

app.listen(80, ()=>{
    console.log("http://127.0.0.1:80");
})