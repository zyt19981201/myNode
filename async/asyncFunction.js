// 定义异步函数，再普通函数之前加上async
// async function fn() {

//     throw '错误信息'; //失败结果
//     return '123'; //成功结果
// }
// console.log(fn());

// fn().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

async function f1() {
    return 'f1'
}

async function f2() {
    return 'f2'
}

async function f3() {
    return 'f3'
}

async function run() {
    let r1 = await f1()
    let r2 = await f2()
    let r3 = await f3()
    console.log(r1, r2, r3);
}
run()