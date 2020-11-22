// 引用系统模块，http用于创建网站服务器的模块
const http = require('http');
const url = require('url');
const path = require('path')
const fs = require('fs')
const mime = require('mime')

// 创建web服务器,app就是网站服务器对象
const app = http.createServer()


app.on('request', (req, res) => {

    // 获取用户的请求路径
    let pathname = url.parse(req.url).pathname

    pathname = pathname == '/' ? '/index.html' : pathname

    // 将用户的请求路径转换成实际的路径
    const p = path.join(__dirname, 'public', pathname)

    // console.log(mime.getType(p));
    let type = mime.getType(p)

    // 读取路径
    fs.readFile(p, (error, result) => {
        if (error != null) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('文件读取失败')
            return
        } else {
            res.writeHead(200, {
                'content-type': type
            })
            res.end(result)
        }
    })

})
// 监听端口
app.listen(3000)
console.log("服务器已经启动！");