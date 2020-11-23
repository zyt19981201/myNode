// 引入express框架
const express = require('express')
// 引入body-parser
const bodyParser = require('body-parser')

// 创建网站服务器
const app = express()
// 利用body-parser拦截所有请求
app.use(bodyParser.urlencoded({
    // extended: false:方法内部使用querystring模块处理请求参数格式
    // extended: true:方法内部使用qs模块处理请求参数格式
    extended: false
}))

// 获取post请求参数
app.post('/add', (req, res) => {
    res.send(req.body)
})


// 监听端口
app.listen(3000)
console.log('服务器启动成功');