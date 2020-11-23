// 引入express框架
const express = require('express')
const fs = require('fs')
// 导入异步promisify
const promisify = require('util').promisify
// 重新包装readFile方法，使其支持异步
const readFile = promisify(fs.readFile)

// 创建网站服务器
const app = express()

app.use('/index', async (req, res, next) => {
    try {
        await readFile('./aa.js')
    } catch (error) {
        next(error)
    }
})

// 错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).send(err.message)

})

// 监听端口
app.listen(3000)
console.log('服务器启动成功');