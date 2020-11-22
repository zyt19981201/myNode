const fs = require('fs')

fs.readFile('./a.txt', 'utf-8', (err, res1) => {
    console.log(res1);
    fs.readFile('./b.txt', 'utf-8', (err, res2) => {
        console.log(res2);
        fs.readFile('./c.txt', 'utf-8', (err, res3) => {
            console.log(res3);
        })
    })
})

