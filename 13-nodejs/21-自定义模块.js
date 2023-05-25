//在一个自定义模块中，module.exports默认是一个空对象{}

//向module.exports对象挂载username属性
module.exports.username = "zs"

module.exports.sayHello = function() {
    console.log("Hello!");
}

//让module.exports 指向一个全新的对象
module.exports = {
    nickname: "小黑",
    sayHi() {
        console.log("Hi~");
    }
}