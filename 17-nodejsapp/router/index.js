const Sound = require("../model/sound")
require("mongoose-query-random")

module.exports = async (req, res)=> {
    //查询数据库当中有多少条正常显示的数据
    var count = await Sound.countDocuments({isshow:"1"})
    console.log(count)
    if(count > 0) {
        //随机查询10条
        Sound.find({isshow: "1"}).random(10, true, (err, sounds)=> {
            console.log(sounds)
            res.render("index", {sounds})
        })
    }
    res.render("index")
}