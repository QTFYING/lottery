// index.js
import fs from 'fs'
import JSON5 from 'json5'
import Mock from 'mockjs' // mockjs 导入依赖模块
import path from 'path'

// 读取json文件
function getJsonFile(filePath) {
  // 读取指定json文件
  // 读取文件路径
  const json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8')
  // 解析并返回
  // 解析json字符串为对象
  return JSON5.parse(json)
}
// 返回一个函数
module.exports = function (app) {
  if (process.env.VITE_MOCK === 'true') {
    // 监听http请求
    app.get('/user/userinfo', function (rep, res) {
      //每次响应请求时读取mock data的json文件
      // getJsonFile方法定义了如何读取json文件并解析成数据对象
      const json = getJsonFile('./userInfo.json5')
      // 将json传入Mock.mock方法中，生成的数据返回给浏览器
      res.json(Mock.mock(json))
    })
  }
}
