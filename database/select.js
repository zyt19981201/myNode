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
// 普通查找
// User.find().then((res) => {
//     console.log(res);res
// })

// 按条件查找:find返回一个数组
// User.find({
//     name: "狗蛋"
// }).then((res) => {
//     console.log(res);
// })


// 按条件查找：findOne返回一个对象，默认返回当前集合的第一条文档
// User.findOne({
//     name: "王五"
// }).then((res) => {
//     console.log(res);
// })

// 按条件查找：查找区间大于20，小于50
// User.find({
//     age: {
//         $gt: 20,
//         $lt: 50
//     }
// }).then((res) => {
//     console.log(res);
// })

// 按条件查找，包含某内容
// User.find({
//     hobbies: {
//         $in: '打豆豆'
//     }
// }).then((res) => {
//     console.log(res);
// })

// 按条件查找，选择要查询的字段
// User.find({
//         age: {
//             $gt: 20,
//             $lt: 50
//         }
//     })
//     // 在字段名前面加上-表示不想查询
//     .select('name email -_id')
//     .then((res) => {
//         console.log(res);
//     })

//按条件查询：查询结构排序,默认升序
// User.find().select('name age -_id').sort('age').then((res) => {
//     console.log(res);
// })

// 按条件查询：降序排列
// User.find().select('name age -_id').sort('-age').then((res) => {
//     console.log(res);
// })

// 按条件查询，跳过前面几条文档
User.find().select('name age -_id').skip(2).sort('-age').then((res) => {
    console.log(res);
})

// 按条件查询，结果保留前几条
User.find().select('name age -_id').limit(3).sort('-age').then((res) => {
    console.log(res);
})