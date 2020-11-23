// 引入express框架
const express = require('express')
// 创建网站服务器
const app = express()
const path = require('path')

// 告诉express框架用什么模板引擎渲染什么后缀的文件
app.engine('art', require('express-art-template'))
// 告诉express框架模板存放的位置
const pathname = path.join(__dirname, 'views')
app.set('views', pathname)
// 告诉模板引擎默认的模板后缀
app.set('view engine', 'art')

app.get('/index', (req, res) => {
    res.render('index', {
        message: 'hello world!zyt'
    })
})
app.get('/list', (req, res) => {
    res.render('list', {
        message: 'list page'
    })
})

// 监听端口
app.listen(3000)
console.log('服务器启动成功');