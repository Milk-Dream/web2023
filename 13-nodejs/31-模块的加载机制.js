//require进行多次调用同一个模块，则只调用一次，缓存中加载
//内置模块的优先级最高
//自定义模块的时候，必须加上./../
//require("./test")会先开始找test文件，然后会找test.js然后找test.json最后test.node
//如果require("./目录")会搜索package.json中的main里面写的文件