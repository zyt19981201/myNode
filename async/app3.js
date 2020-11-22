function getData(callback) {
    callback('你好')
}
getData((message) => {
    console.log('hello');
    console.log(message);
})