const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/songs", {useNewUrlParser:true,useUnifiedTopology:false}).then(()=>{
    console.log("数据库链接成功")
}).catch(()=> {
    console.log("数据库链接失败")
})