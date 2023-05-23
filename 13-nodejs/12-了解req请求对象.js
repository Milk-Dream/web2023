const http = require("http")

const server = http.createServer()

server.on("request", ()=>{
    //req是请求对象,是客户端请求的URL地址
    const url = req.url
    //method是客户端请求的method类型
    const method = req.method

    const str = `Your request url is ${url}, and request method is ${method}`
    console.log(str)
})

server.listen(80, ()=>{
    console.log("server runing at http://127.0.0.1");
})