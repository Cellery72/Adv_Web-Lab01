var http = require('http');

// use callback to start an http server
http.createServer(function(request,response){
  response.writeHead(200);
  response.end('First node page');
}).listen(3000);
