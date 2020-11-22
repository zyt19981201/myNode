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


// 5.更新数据库
// updateOne更新一个数据
User.updateOne({
    name: '李四'
}, {
    name: '刘小宝'
}).then((res) => {
    console.log(res);
})

// updateMany更新多个数据
User.updateMany({
    name: '王五'
}, {
    name: '张大宝',
    age: 21
}).then((res) => {
    console.log(res);
})