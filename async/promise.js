const fs = require('fs')

let promise = new Promise((resolve, reject) => {

    fs.readFile('./a.txt', 'utf8', (err, res1) => {
        if (err != null) {
            reject('读取文件失败')
        } else {
            resolve(res1)
        }
    })
});

promise.then((res1) => {
    console.log(res1);
}).catch((err) => {
    console.log(err);
})