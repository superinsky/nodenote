var fs = require('fs');

var callback = function(err,content){
  console.log(content);
}

fs.readFile('/etc/hosts',callback);
fs.readFile('/etc/inetcfg',callback);
