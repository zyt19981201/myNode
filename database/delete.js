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

//3. 创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
})

// 4.使用集合创建规则
const User = mongoose.model('User', userSchema)


// 按条件删除文档，返回结果就是删除的文档，当多条文档条件符合时，只删除第一条文档
User.findByIdAndDelete({
    _id: '5c09f1e5aeb04b22f8460965'
}).then((res) => {
    console.log('删除成功', res);
})

// 删除多条文档
User.deleteMany({
    _id: '5c09f1e5aeb04b22f8460965'
}).then((res) => {
    console.log('删除成功', res);
})