console.log(exports);
console.log(module.exports);
//exports和module.exports指向同一个对象
console.log(exports === module.exports);

const username = "zs"

exports.username = username
exports.sayHi = function() {
    console.log("HI~");
}