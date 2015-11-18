var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request',function(request, response){
  response.writeHead(200);
  fs.readFile('index.html', function(error, content){
    response.write(content);
    response.end();
    //response.end(content); you can remove response.write by do it this way
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.on('close', function() {
  console.log("Closing down the server...");
});

server.listen(8080);
