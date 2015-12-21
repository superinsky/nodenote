var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
  var newFile = fs.createWriteStream("readme_copy.md");
  var fileBytes = request.headers['content-length'];
  var uploadedBytes = 0;

  request.on('readable',function(){
    var chunk = null;
    while(null !== (chunk = request.read())){
      uploadedBytes += chunk.length;
      var progress = (uploadedBytes/fileBytes) * 100;
      response.write("progress: " + parseInt(progress, 10) + "%\n");
    }
  });

  request.pipe(newFile);
}).listen(8080);

//curl --upload-file readme.md http://localhost:8080
