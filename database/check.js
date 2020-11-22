// 1.引入第三方模块，用于操作数据库
const mongoose = require('mongoose')

// 2.数据库连接
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // 2.1连接成功
    .then(() => {
        console.log('连接数据库成功');
    })
    // 2.2连接失败
    .catch((err) => {
        console.log('连接数据库失败', err);
    })

// 3.创建集合规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        // 设置必填字段，并且自定义错误信息
        required: [true, '请输入文章标题'],
        // 限制字符串的长度
        minlength: [2, '输入的title长度太短'],
        maxlength: [5, '输入的title长度太长'],
        // 去除字符串两边的空格
        trim: true
    },
    price: {
        type: Number,
        min: [0, '输入的price太大'],
        max: [20, '输入的price太大']

    },
    data: {
        type: Date,
        // 默认值
        default: Date.now
    },
    category: {
        type: String,
        // 美枚举，列出可选的值
        enum: {
            values: ['帽子', '上装', '裤子', '鞋子'],
            message: '分类名称不在枚举内容内'
        }
    },

    // 自定义验证器
    author: {
        type: String,
        // 自定义验证器
        validate: {
            validator: v => {
                return v && v.length > 4
            },
            // 自定义错误信息
            message: '输入的author长度不符合规则'
        }
    }
})
// 4.使用集合规则
const Article = mongoose.model('Article', articleSchema)

Article.create({
    title: '    aaa    ',
    price: 18,
    category: '帽子1',
    author: 'ab'
}).then((res) => {
    console.log(res);
}).catch((err) => {
    // 获取错误信息对象
    const error = err.errors
    // 循环错误信息对象
    for (let i in error) {
        // 打印错误信息
        console.log(error[i]['message']);
    }
})