#!/usr/bin/env node
var index1 = require ('./index.html');
var fs = require ('fs');
var express = require ('express');
var app = express.createServer (express.logger());
//
// Function index2 to process the message from index.html
//
  app.get('/', function(request, response) {
                          response.send(index1);});
//
  var port = process.env.PORT || 5000;
  app.listen(port, function() {console.log("listening on" + port);});
//  
var outfile = "index.txt";
fs.writeFileSync = (outfile, index1);
//
