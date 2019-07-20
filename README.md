#通过本地搭建NODE环境，手动实现JSONP的的跨域处理.
### 跨域出现的原因：浏览器的同源安全策略。按照MDN所说，同源策略限制了从同一个源加载的文档或者脚本如何和来自另一个源的文档和脚本等资源进行交互，这是阻止恶意文件程序攻击的一个重要安全机制。
##
### 同源就是协议（http/https）,域名(www.baidu.com), 端口号(80),都相同，才称之为同源.但凡有一个不同，就存在跨域
#### 实现原理:采用的是是html的script标签src属性不受同源限制

## Quickstart

- From github
```
git clone https://github.com/wangbow/cross-jsonp.git
```
```
npm run start
```
#### 成功后的效果图
<img src="./demo.png" />
