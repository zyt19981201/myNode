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
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})


const articleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    // 关联用户集合
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const User = mongoose.model('User', userSchema)

const Article = mongoose.model('Article', articleSchema)

// 创建用户
// User.create({
//     name: '小刘'
// }).then((res) => {
//     console.log(res);
// })

// 创建文章
// Article.create({
//     titlt: 'node',
//     author: '5fb77a8ef1588e3f90cfee48'
// }).then((res) => {
//     console.log(res);
// })

// 查询 
Article.find().populate('author').then((res) => {
    console.log(res);
})