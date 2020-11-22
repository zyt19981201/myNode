// 引入mongooose
const mongoose = require('mongoose')

// 创建学生集合规则
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 25
    },
    sex: {
        type: String,
    },
    email: String,
    hobbies: [String],
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }
})

// 使用学生集合规则创建集合
const Student = mongoose.model('Student', studentSchema)

// 导出学生集合
module.exports = Student