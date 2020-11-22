const http = require('http')
const url = require('url')
const querystring = require('querystring')
require('./model/index')
const User = require('./model/user')

// 1.搭建网站服务器，实现客户端与服务器端的通信
//1.1创建服务器
const app = http.createServer()
// 1.2为服务器对象添加请求事件
app.on('request', async (req, res) => {

    const method = req.method // 获取请求方式

    // query保存url的字符串，将其设置为true，则表示保存对象
    const {
        pathname,
        query
    } = url.parse(req.url, true) //获取请求地址

    // 判断请求方式
    if (method == 'GET') {

        // 呈现用户列表界面
        if (pathname == '/list' || pathname == '/') {

            // 查询用户信息
            let users = await User.find()
            // console.log(users);
            // 用户界面
            let list = `
            <!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>用户列表</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
</head>

<body>
	<div class="container">
		<h6>
			<a href="/add" class="btn btn-primary">添加用户</a>
		</h6>
		<table class="table table-striped table-bordered">
			<tr>
				<td>用户名</td>
				<td>年龄</td>
				<td>爱好</td>
				<td>邮箱</td>
				<td>操作</td>
			</tr>
            `

            // 对数组进行循环操作
            users.forEach((item) => {
                list += `
                <tr>
				<td>${item.name}</td>
				<td>${item.age}</td>
				<td>
                `
                item.hobbies.forEach((item) => {
                    list += `
                    <span>${item}</span>
                    `
                })

                list += `
                </td>
				<td>${item.email}</td>
				<td>
					<a href="/remove?id=${item._id}" class="btn btn-danger btn-xs">删除</a>
					<a href="/modify?id=${item._id}" class="btn btn-success btn-xs">修改</a>
				</td>
			</tr>
                `
            })
            list += `
            </table>
            </div>
        </body>
        
        </html>
            `
            res.end(list)
        } else if (pathname == '/add') {
            let add = `
            <!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>用户列表</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
</head>

<body>
	<div class="container">
		<h3>添加用户</h3>
		<form method="post" action="/add">
			<div class="form-group">
				<label>用户名</label>
				<input name="name" type="text" class="form-control" placeholder="请填写用户名">
			</div>
			<div class="form-group">
				<label>密码</label>
				<input name="password" type="password" class="form-control" placeholder="请输入密码">
			</div>
			<div class="form-group">
				<label>年龄</label>
				<input name="age" type="text" class="form-control" placeholder="请填写邮箱">
			</div>
			<div class="form-group">
				<label>邮箱</label>
				<input name="email" type="email" class="form-control" placeholder="请填写邮箱">
			</div>
			<div class="form-group">
				<label>请选择爱好</label>
				<div>
					<label class="checkbox-inline">
						<input type="checkbox" value="足球" name="hobbies"> 足球
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="篮球" name="hobbies"> 篮球
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="橄榄球" name="hobbies"> 橄榄球
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="敲代码" name="hobbies"> 敲代码
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="抽烟" name="hobbies"> 抽烟
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="喝酒" name="hobbies"> 喝酒
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="烫头" name="hobbies"> 烫头
					</label>
				</div>
			</div>
			<button type="submit" class="btn btn-primary">添加用户</button>
		</form>
	</div>
</body>

</html>
            `
            res.end(add)
        } else if (pathname == '/modify') {
            let user = await User.findOne({
                _id: query.id
            })
            let hobbies = ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头']
            // console.log(user);
            let modify = `
            <!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>用户列表</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
</head>

<body>
	<div class="container">
		<h3 class="text-center">修改用户信息</h3>
		<form method="post" action="/modify?id=${user._id}">
			<div class="form-group">
				<label>用户名</label>
				<input value="${user.name}" name="name" type="text" class="form-control" placeholder="请填写用户名">
			</div>
			<div class="form-group">
				<label>密码</label>
				<input value="${user.password}" name="password" type="password" class="form-control" placeholder="请输入密码">
			</div>
			<div class="form-group">
				<label>年龄</label>
				<input value="${user.age}" name="age" type="text" class="form-control" placeholder="请填写邮箱">
			</div>
			<div class="form-group">
				<label>邮箱</label>
				<input value="${user.email}" name="email" type="email" class="form-control" placeholder="请填写邮箱">
			</div>
			<div class="form-group">
				<label>请选择爱好</label>
				<div>
            `

            hobbies.forEach(item => {
                // 判断当前循环项是否在用户的爱好中
                let isHobby = user.hobbies.includes(item)
                if (isHobby) {
                    modify += `
                    <label class="checkbox-inline">
                      <input type="checkbox" value="${item}" name="hobbies" checked> ${item}
                    </label>`
                } else {
                    modify += `
                    <label class="checkbox-inline">
                      <input type="checkbox" value="${item}" name="hobbies"> ${item}     
                    </label>`
                }
            })

            modify += `
            </div>
			</div>
			<button type="submit" class="btn btn-primary">修改用户信息</button>
		</form>
	</div>
</body>

</html>
            `
            res.end(modify)
        } else if (pathname == '/remove') {
            // res.end(query.id)
            await User.findOneAndDelete({
                _id: query.id
            })

            res.writeHead(301, {
                Location: '/list'
            })
            res.end()
        }

    } else if (method == 'POST') {
        // 处理添加功能
        if (pathname == '/add') {
            // 接受用户信息

            // formData用于接收用户提交的信息
            let formData = ''

            // 当有参数传递时触发data事件
            req.on('data', (param) => {
                formData += param
            })
            // 当参数接收完毕后触发end事件
            req.on('end', async () => {
                let user = querystring.parse(formData)
                await User.create(user);
                // 重定向跳转
                res.writeHead(301, {
                    location: '/list'
                })
                res.end()
            })
            // 将接收到的用户信息提交到数据库中
        } else if (pathname == '/modify') {
            // 接受用户信息

            // formData用于接收用户提交的信息
            let formData = ''

            // 当有参数传递时触发data事件
            req.on('data', (param) => {
                formData += param
            })
            // 当参数接收完毕后触发end事件
            req.on('end', async () => {
                let user = querystring.parse(formData)
                await User.updateOne({
                        _id: query.id
                    },
                    user);
                // 重定向跳转
                res.writeHead(301, {
                    location: '/list'
                })
                res.end()
            })
            // 将接收到的用户信息提交到数据库中
        }
    } else {
        console.log('请求方式出错');
    }
})
// 1.3监听端口号3000
app.listen(3000)