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
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPulished: Boolean
})

// 4.使用规则创建集合
const Course = mongoose.model('Course', courseSchema) //第一个参数首字母必须大写，但在数据库中创建的确实courses

// 5.创建文档
const course = new Course({
    name: "《如何让刘小宝开心》",
    author: "张大宝",
    isPulished: true

})

// 6.保存插入数据
course.save()