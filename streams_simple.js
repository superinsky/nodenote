var http = require('http');

http.createServer(function(request,response){
  response.writeHead(200);
  request.pipe(response);
}).listen(8080)


//example 2
var fs = require('fs');
var file = fs.createReadStream('fruits.txt');
file.pipe(process.stdout);
