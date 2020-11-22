// const a = require('./a')

// console.log(a);

// console.log(a.add(10, 10));

// console.log(a.hello('zhangsan'));


// // 通过模块的名字fs对模块进行引入
// const fs = require('fs')

// // 通过模块内部的readFile读取文件内容
// const fd = fs.readFile('./hello.txt', 'utf-8', (err, doc) => {
//     if (err == null) {
//         console.log(doc);
//     }
// })


// // 写入文件

// const content = '张裕堂'

// fs.writeFile('./hello.txt', content, (err, doc) => {
//     if (err == null) {
//         console.log('写入成功');
//     }
// })


// 路径拼接
const fs = require('fs')
const path = require('path')

const filePath = path.join('a', 'b', 'c')

console.log(filePath);


console.log(__dirname);

fs.readFile(path.join(__dirname, 'hello.txt'), 'utf-8', (err, doc) => {
    console.log(err);
    console.log(doc);
    console.log(doc);
})