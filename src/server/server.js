/*
Node.js 进阶 - 多文件 Stream 合并，串行和并发两种模式实现
https://blog.csdn.net/qiwoo_weekly/article/details/124138526
利用node压缩、合并js,css,图片
http://t.zoukankan.com/zhuzf-p-2707332.html
Node.js 静态文件服务器实战
https://www.infoq.cn/news/2011/11/tyq-nodejs-static-file-server/

Vuex的基本原理与使用
https://blog.csdn.net/weixin_42935546/article/details/90199813
Vuex从使用到原理解析
https://www.imooc.com/article/291242/
vue源码阅读解析
https://zhuanlan.zhihu.com/p/419896443

vue源码解读，搞定diff算法

https://baijiahao.baidu.com/s?id=1711018660195989831&wfr=spider&for=pc


https://baijiahao.baidu.com/s?id=1725697120962241922&wfr=spider&for=pc


*/
var db=require("./db.js"),
express = require('express'),
app = express(),
server= app.listen(4444, function () {
 var addr=server.address();
  console.log(addr.address, addr.port)
 /*
复用server
var server  = require('http').createServer(app);//httpshttps.createServer
var io      = require('socket.io').listen(server);
...
server.listen(1234);
io.sockets.on('connection', function (socket) {
	
 app.get('/', function (req, res) {
   res.send('test');
})
 */
});
/*
var bodyParser = require('body-parser');
app.use(bodyParser.json());
 */
//设置静态文件目录
app.use(express.static(__dirname+"/public"));

//api：
 app.get('/', function (req, res) {
   res.send('test');
});
 app.get('/api/list', function (req, res) {
	 
	 
   res.send('list');
});
//请求合并
 app.get('/api/f', function (req, res) {
	 
	 
   res.send('list');
});

/*
//允许跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("Access-Control-Allow-Credentials", true);
    // res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);
    else next();
}
)*/
