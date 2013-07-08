// #!/usr/bin/env node
// var index1 = require ('./index.html');
// var index1 = new Buffer('Hello World from index.html');
// var index1 = require ('index1');
var fs = require ('fs');
var express = require ('express');
var app = express.createServer (express.logger());
 index1 = fs.readFileSync('./index.html', null);
//index1 = fs.readFileSync('index.html');
//
// Function index2 to process the message from index.html
//
var Hello = new Buffer('Hello World from index.html', "utf-8");
  app.get('/', function(request, response) {
                          response.send(Hello.toString('utf-8', 0, Hello.length));});
// 
//
  var port = process.env.PORT || 5000;
  app.listen(port, function() {console.log("listening on" + port);});
var outfile = "index.txt";
fs.writeFileSync = (outfile, index1);
//
