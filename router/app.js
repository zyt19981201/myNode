// 创建网站服务器
// 1.引入系统模块http
const http = require('http')
// 引入系统模块url
const url = require('url')

// 2.创建网站服务器
const app = http.createServer()
// 3.为网站服务器对象添加请求事件
app.on('request', (req, res) => {
    // 4.实现路由功能
    // 4.1获取客户端的请求方式
    const method = req.method.toLowerCase()
    console.log(method);
    // 4.2获取客户端的请求地址
    const pathname = url.parse(req.url).pathname
    console.log(pathname);

    if (method == 'get') {

        // 响应报文处理，中文编码
        res.writeHead(200, {
            'content-type': 'text/html;charset=utf8'
        })

        if (pathname == '/' || pathname == '/index.html') {
            res.end('欢迎来到首页')
        } else if (pathname == '/list.html') {
            res.end('欢迎来到列表页')
        } else {
            res.end('get出错啦')
        }
    } else if (method == 'post') {

    } else {

    }
})
// 监听端口
app.listen(3000)
console.log('服务器启动成功');