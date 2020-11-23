// 引入express框架
const express = require('express')
// 创建路由对象
const home = express.Router()
// 为路由对象设置匹配路径
home.get('/index', (req, res) => {
    res.send('欢迎来到博客首页界面')
})
// 导出路由对象home
module.exports = home