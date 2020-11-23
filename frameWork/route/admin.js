// 引入express框架
const express = require('express')
// 创建路由对象
const admin = express.Router()
// 为路由对象设置匹配路径
admin.get('/index', (req, res) => {
    res.send('欢迎来到博客管理员界面')
})
// 导出路由对象home
module.exports = admin