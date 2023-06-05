const express = require("express")
const app = express()


app.use((req, res, next)=>{
    console.log("调用第一个全局中间件");
})

app.use((req, res, next)=>{
    console.log("调用第二个全局中间件");
})


app.get("/", function(req, res){
    console.log("GET Request");
    res.send("GET Request")
})

app.listen(80,()=>{
    console.log("http://127.0.0.1:80")
    
})