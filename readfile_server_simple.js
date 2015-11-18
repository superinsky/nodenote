var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);

  fs.readFile('index.html', function(error, content){
    response.write(content);
    response.end();
    //response.end(content); you can remove response.write by do it this way
  });

}).listen(8080);
