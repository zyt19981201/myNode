// 引入express框架
const express = require('express')
// 引入body-parser
const bodyParser = require('body-parser')

// 创建网站服务器
const app = express()


// 获取post请求参数
app.get('/index/:id/:name/:age', (req, res) => {
    // 获取请求参数
    res.send(req.params)
})


// 监听端口
app.listen(3000)
console.log('服务器启动成功');