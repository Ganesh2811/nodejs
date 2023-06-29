console.log("sub");
var a= 20;
var b=20;
console.log(a+b);
//console module provides a simple debugging console that is similar to the javascript console mechanism provided by web browsers

const app = require('./app');
console.log(app.x + app.y);
console.log(app.z());

const fs = require("fs");
fs.writeFileSync("hello.txt" ,"code step by step");

const colors  = require('colors');
console.log("hello".red);