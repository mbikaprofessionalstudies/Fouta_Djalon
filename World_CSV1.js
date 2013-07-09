#!/usr/bin/env node
var fs = require('fs');
var outfile ="World_CSV1.txt";
var out = "";
var input = new Array();
input[1] = "https://github.com/mbikaprofessionalstudies/bitstarter";
input[2] = "http://protected-peak-8380.herokuapp.com";
var N = 2;

for (i=0; i<N; i++)
{
  out +=input[i+1];
    if (i+1 < N)
     {
       out +=',';
       out += ' ';
     }
}

fs.writeFileSync(outfile, out); 
