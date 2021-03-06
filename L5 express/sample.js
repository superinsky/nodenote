var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.listen(8080);

//Params example
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(request, response){
	response.end(quotes[request.params.name]);
});


app.listen(8080);

//app.js
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  var quote = quotes[req.params.name];
  res.render('quote.ejs', {
    name: req.params.name,
    quote: quote
  });

});

app.listen(8080);

//views/quote.ejs
// <h2>Quote by <%= name %></h2>
//
// <blockquote>
//   <%= quote  %>
// </blockquote>


//format url
var url = require('url');

options = {
  // add URL options here
  protocol:"http",
  host: "search.twitter.com",
  pathname: "/search.json",
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);
console.log(searchURL);


//example to use request module
var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
var req = require('request');

req(searchURL, function(error, response, body){
  console.log(body);
}) ;



//a express server issue a request to another server's url
var url = require('url');
var request = require('request');
var express = require('express');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var app = express();

app.get('/', function(req,res){
  request(searchURL).pipe(res);
});

app.listen(8080);
