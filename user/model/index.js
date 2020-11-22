const mongoose = require('mongoose')

// 2.连接数据库创建用户集合，并且往集合中插入文档
// 2.1连接数据库:默认端口27017
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(() => {
        console.log('数据库连接失败');
    })