const mongoose = require("mongoose")

//创建集合规则
const soundSchema = new mongoose.Schema({
    //歌手的名称
    singer: {
        type:String,
        required:true
    },
    //歌曲名称
    songname: {
        type:String,
        required:true
    },
    //保存服务器名称
    filename: {
        type:String,
        required:true
    },
    //是否显示该歌曲
    isshow: {
        type:String,
        enum:["0", "1"],
        default:"1"
    },
    //添加或者更新时间
    addtime: {
        type:Date,
        default:Date.now
    }
})

//创建数据模型 sounds
const Sound = mongoose.model("Sound", soundSchema)

module.exports = Sound