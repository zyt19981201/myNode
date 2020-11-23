// 引入express框架
const express = require('express')
// 引入body-parser
const bodyParser = require('body-parser')

// 创建网站服务器
const app = express()

app.use(fn({
    a : 1
}))

function fn(obj) {
    return function (req, res, next) {
        if (obj.a == 1) {
            console.log('obj的值为1');
        } else {
            console.log('obj的值不为1');
        }
        next()
    }
}

// 获取post请求参数
app.get('/', (req, res) => {
    res.send('哈哈哈')
})


// 监听端口
app.listen(3000)
console.log('服务器启动成功');