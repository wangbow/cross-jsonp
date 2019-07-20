const http = require("http");
const queryString = require("querystring");
const url = require("url");

const responseDate = JSON.stringify({
    name : "hello World"
})

const server = http.createServer((req, res)=>{
    let path = url.parse(req.url);
    if(path.pathname == "/cross"){
        let cb = queryString.parse(path.query).getResponseData;
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' })
        res.write(`${cb}(${responseDate})`);
    }else{
        res.writeHead(403, { 'Content-Type': 'text/plain;charset=utf-8' })
        res.write('403');
    }

    res.end();
})

server.listen(4000,()=>{
    console.log('Node server is start and listen PORT 4000');
})