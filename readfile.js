var fs = require('fs');

fs.readFile('index.html', "utf-8", function(error, content){
  console.log(content);
});



//A small change to test call back
// var fs = require('fs');
//
// fs.readFile('text', 'utf-8', function(error, content){
//   setTimeout(function(){
//         console.log(content)
//   },3000)
//   console.log("echo first");
// });
