'use strict'
const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

const routes = require('./app/routes/routes') // 引入路由
// const {settings} = require('./config')

// 配置静态文件
app.use(express.static(path.join(__dirname, 'app/public')))
// 配置apidoc
app.use('/apidoc', express.static(path.join(__dirname, 'app/public/apidoc/')))

// 请求体解析中间件
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 注册路由
routes(app)

app.listen(4000)
console.log('express-blog server started on: ' + 4000)

module.exports = app
