//example 1
// module custom_hello.js
var hello = function () {
  console.log("hello!")
}

module.exports = hello;

//app.js call
var hello = require('./custom_hello');
hello();

//example 2
//module custom_goodbye.js
exports.goodbye = function() {
  console.log("bye!");
}

//app.js call
var gb = require('./custom_goodbye')
gb.goodbye();

//or call in one line
require('./custom_goodbye').goodbye();


//example 3
//foo.js
var foo = function(){  }
var bar = function(){  }
var baz = function(){  }

exports.foo = foo
exports.bar = bar

//app.js
var myMod = require(./foo.js);
myMod.foo();
myMod.bar();
// we didn't exports baz, so baz is a private funtion
