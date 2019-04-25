var http = require('http');
var express = require('express');

http.createServer(function(request , response){
    // 發送http請求
    // Http狀態值:200 ,ok
    // 內容類型: text/plain
    response.writeHead(200 , {'Content-type': 'text/plain'});

    // 發送輸入值 "Hello Billy";
    response.end("Hello Billy,~~~");
}).listen(8888); // 這個listen可以自由取

console.log('Server running at http://127.0.0.1:8888/');