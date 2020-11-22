const fs = require('fs')
const promisify = require('util').promisify
// readFile不是一个异步操作，再次转换类型成异步操作
const readFile = promisify(fs.readFile)

async function run() {
    // 读取三个文件，await是等待当前结束后再继续执行下一个
    let ra = await readFile('./a.txt', 'utf8');
    let rb = await readFile('./b.txt', 'utf8');
    let rc = await readFile('./c.txt', 'utf8');
    console.log(ra, rb, rc);
}

run()