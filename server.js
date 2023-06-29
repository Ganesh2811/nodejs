const http = require("http");

http.createServer((req,res)=>{
    res.write("hello, This from ganesh pawar");
    res.end();
}).listen(4500);