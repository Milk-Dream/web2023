const formidable = require("formidable")
const Sound = require("../model/sound")
const dateformat = require("dateformat")
const fs = require("fs")
const path = require("path")


module.exports = (req, res)=> {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname,"../","public","music");
    //导入文件后缀
    form.keepExtensions = true;
    form.maxFileSize = 20 * 1024 * 1024;
    //解析数据
    form.parse(req, (err,fields, files)=> {
        console.log(fields)
        console.log(files)
        //把上传的文件名字改成2022102412345.mp3
        var newname = dateformat(new Date(), "yyyymmddHHMMss")
        var salt = parseInt(Math.random()*89999+10000)
        var extname = path.extname(files.source.name)
        const newfilename = newname + salt + extname
        fs.renameSync(files.source.path,path.join(__dirname,"../","public","music",newfilename))

        //把歌曲信息写入到数据库中
        Sound.create({
            singer:files.singer,
            songname:fields.songname,
            filename:newfilename
        })

        res.redirect("/")
    })
}