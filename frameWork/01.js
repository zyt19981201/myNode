// 引入express框架
const express = require('express')

// 创建网站服务器
const app = express()

app.get('/', (req, res) => {
    // send方法：
    // 1.send方法内部自动检测响应内容的类型
    // 2.send方法会自动设置http状态码
    // 3.send方法会帮助我们自动设置响应内容的类型和编码
    res.send('hello express')
})

app.get('/list', (req, res) => {
    res.send({
        name: '张三',
        age: 20
    })
})

// 监听端口
app.listen(3000)
console.log('服务器启动成功');