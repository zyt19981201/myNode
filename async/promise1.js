const fs = require('fs')

function f1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./a.txt', 'utf-8', (err, res1) => {
            resolve(res1)
        })
    })
}

function f2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./b.txt', 'utf-8', (err, res2) => {
            resolve(res2)
        })
    })
}

function f3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./c.txt', 'utf-8', (err, res3) => {
            resolve(res3)
        })
    })
}

f1().then((res1) => {
    console.log(res1);
    return f2()
}).then((res2) => {
    console.log(res2);
    return f3()
}).then((res3) => {
    console.log(res3);
})