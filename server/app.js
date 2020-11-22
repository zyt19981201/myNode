// 引用系统模块，http用于创建网站服务器的模块
const http = require('http')
// 引用模块用于处理url地址
const url = require('url')


// 创建web服务器,app就是网站服务器对象
const app = http.createServer()
// 为网站服务器对象添加一个事件，当用户发送请求时执行
// res:响应，req请求


app.on('request', (req, res) => {


    //获取请求地址
    // console.log(req.url);

    // 获取请求报文信息
    // console.log(req.headers['host']);

    // 响应状态码
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    })

    // url对象,url参数含义：要解析的url参数地址，true将查询参数解析成对象形式
    // let params = url.parse(req.url, true)
    // 对象的解构

    let {
        query,
        pathname
    } = url.parse(req.url, true)

    console.log(query.name);
    console.log(query.age);

    // console.log(params);
    // console.log(params.name);
    // console.log(params.age);


    if (pathname == '/index.html' || pathname == '/') {
        res.end('<li>欢迎来到首页</li>')
    } else if (pathname == '/list.html') {
        res.end('<li>欢迎来到列表页</li>')
    }

    // 请求对象req
    // 获取请求方式
    // console.log(req.method);
    // 响应
    // res.end('<h1>hello world</h1>')
    if (req.method == 'POST') {
        res.end('POST')
    } else if (req.method == 'GET') {
        res.end('GET')
    }
})
// 监听端口
app.listen(3000)
console.log("服务器已经启动！");