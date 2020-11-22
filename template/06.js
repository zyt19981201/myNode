// 导入模块引擎
const template = require('art-template')
const path = require('path')
const dateFormat = require('dateformat')


// const views = path.join(__dirname, 'views', '06.art')
// 设置模板根目录
template.defaults.root = path.join(__dirname, 'views')
// 配置模板默认后缀
template.defaults.extname = '.art'

// 导入模板变量
template.defaults.imports.dateFormat = dateFormat

// template用于拼接字符串
// 第一个参数为模板路径，绝对路径
const html = template('06', {
    data: {
        time: new Date
    }
})

console.log(html);