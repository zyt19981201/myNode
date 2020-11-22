// 引入express框架
const express = require('express')
// 创建网站服务器
const app = express()

// 网站公告
// app.use((req, res, next) => {
//     res.send('当前网站正在维护')
// })

app.use('/admin', (req, res, next) => {
    // 用户没有登陆
    let isLoagin = true

    if (isLoagin) {
        next()
    } else {
        res.send('您还没有登录')
    }
})

app.get('/admin', (req, res, next) => {
    res.send('您已经登陆,可以访问当前界面')
})

app.use((req, res, next) => {
    res.status(404) //自定义状态码
    res.send('404')
})

// 监听端口
app.listen(3000)
console.log('服务器启动成功');