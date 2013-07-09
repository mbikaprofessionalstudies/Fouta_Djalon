#!/usr/bin/env node
var fs = require ('fs');
var outfile = "World_CSV2.txt";
var out = " ";
var input = new Array();
input[1] = "https://github.com/mbikaprofessionalstudies/bitstarter/blob/ef8358270469052aae7f9795ac1bf339f314a292/index.html";
var N = 1;
for(i=0; i<N; i++)
{
  out += input[i+1];
    if(i+1 < N)
     {
       out +=',';
       out +=" ";
     }
}
fs.writeFileSync(outfile, out); 

