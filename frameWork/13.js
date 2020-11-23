// 引入express框架
const express = require('express')
// 创建网站服务器
const app = express()
const path = require('path')

const pathname = path.join(__dirname, 'public')

// 实现静态资源访问
app.use(express.static(pathname))

// 监听端口
app.listen(3000)
console.log('服务器启动成功');