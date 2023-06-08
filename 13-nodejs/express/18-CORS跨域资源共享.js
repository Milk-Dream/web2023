//响应头头部携带一个Access-Control-Allow-Origin: * ,允许来自任何域的请求
//默认情况下,CORS仅支持客户端向服务器发送如下9个请求头Accept,Accept-Language,Content-Language,DPR,Downlink,Save-Data,Viewport-Width,Width,Content-Type(值仅限于text/plain,multipart/form-data,application/x-www-form-urlencoded三者之一)
//如果客户端向服务器发送了额外的请求头信息,则需要在服务端,通过Access-Control-Allow-Headers对额外的请求头进行声明,否则这次请求会失败

//CORS响应头部 - Access-Control-Allow-Methods,默认情况下CORS仅支持GET,POST,HEAD请求
//如果客户端希望通过PUT,DELETE等方式请求服务器的资源,则需要在服务器,通过Access-Control-Alow-Methods来指明实际请求所允许

//CORS分为简单请求和预检请求

//CORS的简单请求定义
//请求方式:GET,POST,HEAD
//HTTP头部信息不超过以下字段2,无自定义头部字段
//Accept,Accept-Language,Content-Language,DPR,Downlink,Save-Data,Viewport-Width,Width,Content-Type(值仅限于text/plain,multipart/form-data,application/x-www-form-urlencoded三者之一)

//CORS的预检请求
//只要符合以下任何一个条件的请求
//请求方式GET,POST,HEAD之外的请求Method类型
//请求头中包含自定义头部字段
//向服务器发送了application/json格式的数据
//在浏览器与服务器正式通信之前,浏览器会发送OPTION请求进行预检,以获知服务器是否允许该实际请求,所有这一次的OPTION请求称为"预检请求".服务器成功响应预检请求后,才会发送真正的请求,并且携带真实数据

//CORS简单请求和预检请求的区别
//谷歌浏览器无法显示预检请求,火狐浏览器可以显示
//简单请求的特点:客户端与服务端之间只会发生一次请求
//预检请求的特点:客户端与服务器之间会发生两次请求,OPTION预检请求成功之后,才会发起真正的请求





































































































































