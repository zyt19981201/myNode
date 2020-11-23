// 引入express框架
const express = require('express')
// 创建网站服务器
const app = express()
const path = require('path')

app.engine('art', require('express-art-template'))
const pathname = path.join(__dirname, 'views')
app.set('views', pathname)
app.set('view engine', 'art')

app.locals.users = [{
        name: '张三',
        age: 21,
    },
    {
        name: '李四',
        age: 18
    }
]

app.get('/index', (req, res) => {
    res.render('index', {
        message: '首页'
    })
})
app.get('/list', (req, res) => {
    res.render('list', {
        message: '列表页'
    })
})

// 监听端口
app.listen(3000)
console.log('服务器启动成功');