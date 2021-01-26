'use strict';

const input = require('readline-sync');

let myString = input.question("welcome to the spacer replacer\nplease enter an input:\n");
let myArrString = myString.split(' ');
let arrStrSize = myArrString.length;
let ReplacedString="";
for(let i=0;i<arrStrSize-1;i++){
    ReplacedString=ReplacedString+myArrString[i]+"*";
}
ReplacedString=ReplacedString+myArrString[arrStrSize-1];

//console.log(myArrString);

console.log(ReplacedString)

