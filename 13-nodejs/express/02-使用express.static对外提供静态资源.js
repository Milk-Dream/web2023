const express = require("express")

const app = express()

//在这里调用express.static()方法,快速的对外提供静态资源
app.use(express.static("./clock"))
app.use("/files",express.static("./files"))
app.listen(80, ()=>{
    console.log("express server runing at http://127.0.0.1");
})

//npm i -g nodemon
