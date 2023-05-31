## 安装方式
npm install itheima-tools

## 导入
```js
const itheima = require("itheima-tools")
```

## 格式化时间
```js
//调用dateFormat对时间进行格式化
 const dtStr = itheima.dateFormat(new Date())
 //结果 2023-04-31 01:41:11
console.log(dtStr)
```

## 转义HTML中特殊字符
```js
//待转换的HTML字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
//调用htmlEscape方法进行转换
const str = itheima.htmlEscape(htmlStr)
//转换的结果
console.log(str)

```

## 还原HTML中的特殊字符

```js
//待还原的字符串
const str2 = itheima.htmlUnEscape(str)
//输出结果<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2)
```

## 开源协议
ISC
