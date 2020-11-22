// 导入模块引擎
const template = require('art-template')
const path = require('path')

// template用于拼接字符串
// 第一个参数为模板路径，绝对路径
const views = path.join(__dirname, 'views', 'index.art')
const html = template(views, {
    data: {
        name: '张三',
        age: 17
    }
})

console.log(html);