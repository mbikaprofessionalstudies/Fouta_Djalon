#!/usr/bin/env node
var fs = require ('fs');
var express = require ('express');
var app = express.createServer (express.logger());
// index1 = fs.readFileSync('./index.html', null);
//
// Function index2 to process the message from index.html
//
var Outfile = "World.txt";
var Out = "Hello World from index.html\n";
  app.get('/', function(request, response) {
                          response.send(Out);});
// 
//

  var port = process.env.PORT || 5000;
  app.listen(port, function() {console.log("listening on" + port);});
fs.writeFileSync = (Outfile, Out);
console.log("Script: " + 'web.js' + "\nWrote: " + Out + "TO: " + Outfile);
//
