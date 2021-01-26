const input = require('readline-sync');

let myString = input.question("welcome to the vowel capitalizer\nplease enter an input:\n");

myString=  myString.replace(/a/gi ,"A");
myString=  myString.replace(/e/gi ,"E");
myString=  myString.replace(/i/gi ,"I");
myString=  myString.replace(/o/gi ,"O");
myString=  myString.replace(/u/gi ,"U");
myString=  myString.replace(/y/gi ,"Y",);

console.log(myString);




