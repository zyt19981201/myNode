// 引用系统模块，http用于创建网站服务器的模块
const http = require('http')

// 创建web服务器,app就是网站服务器对象
const app = http.createServer()

// 处理请求参数模块
const querystring = require('querystring');


app.on('request', (req, res) => {
    // post参数是通过事件的方式接受的

    let postParams = ''

    // data 当请求参数传递时触发data事件
    req.on('data', params => {
        postParams += params
    })

    // end 当请求事件完成后触发end事件 
    req.on('end', () => {
        console.log(querystring.parse(postParams));
    })

    res.end('ok')
})
// 监听端口
app.listen(3000)
console.log("服务器已经启动！");