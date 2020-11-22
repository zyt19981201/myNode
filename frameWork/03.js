// 引入express框架
const express = require('express')
// 创建网站服务器
const app = express()

// 接收所有请求
app.use((req, res, next) => {
    console.log('所有请求');
    next()
})

app.use('/request',(req, res, next) => {
    console.log('request所有方式');
    next()
})

app.get('/request', (req, res, next) => {
    req.name = "张三",
        next()
})
app.get('/request', (req, res) => {
    res.send(req.name)
})
app.get('/list', (req, res) => {
    res.send('list')
})

// 监听端口
app.listen(3000)
console.log('服务器启动成功');