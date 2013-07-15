//#!/usr/bin/env node
var fs = require ('fs');
var express = require ('express');
var htmlfile = "index.html";

var app = express.createServer (express.logger());

app.get('/', function(request, response) {
    var html = fs.readFilesSync(htmlfile).toString();
    response.send(html);
});
//
// Function index2 to process the message from index.html
//
//var outfile = "World.txt";
//var out = "Hello World from index.html\n";
//fs.writeFileSync(outfile, out);
//app.get('/', function(request, response) {
//                          response.send(out);});
// 
//

var port = process.env.PORT || 8080;
app.listen(port, function() {console.log("listening on " + port);});
//console.log("Script: " + 'web.js' + "\nWrote: " + out + "TO: " + outfile);
//
