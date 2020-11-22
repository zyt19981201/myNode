require('./model/connect')
// 引入http模块
const http = require('http')
// 引入模板引擎
const template = require('art-template')
// 引入path模块：路径拼接
const path = require('path')
// 引入静态资源模块
const serveStatic = require('serve-static')
// 引入处理时间模块
const dateFormat = require('dateformat')
// 引入路由
const router = require('./route/index')

// 配置模板根目录
template.defaults.root = path.join(__dirname, 'views')
// 处理日期格式的方法
template.defaults.imports.dateFormat = dateFormat


// 实现静态资源服务
const serve = serveStatic(path.join(__dirname, 'public'))

// 创建网站服务器
const app = http.createServer()
// 为网站服务器添加请求事件
app.on('request', (req, res) => {
    // 启用路由
    router(req, res, () => {})
    // 启用静态资源服务
    serve(req, res, () => {})
})
app.listen(80)
console.log('服务器启动成功');