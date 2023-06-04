const express = require("express")

const app = express()

app.get("/", (req, res)=>{
    res.send("get request")
})

app.post("/", (req, res) => {
    res.send("post request");
})

app.listen(80, () => {
    console.log("http://127.0.0.1:80");
})