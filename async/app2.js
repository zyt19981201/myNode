// 拿不到getMsg的返回结果
function getMsg() {
    setTimeout(() => {
        return 'hello world'
    }, 2000)
}
console.log(getMsg());

// 通过回调函数拿到结果
// 实参 
function getMsg1(callback) {
    setTimeout(() => {
        callback('hello world')
    }, 2000)
}

// data形参
getMsg1((data) => {
    console.log(data);
})