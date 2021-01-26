'use strict';

const input = require('readline-sync');

let num=Number(input.question("Please enter a number larger than 10:\n"));

while(num <=10 || !Number.isInteger(num)){
    //console.log(typeof num);
    //console.log(num);
    num = Number(input.question("Please enter a number LARGER than 10:\n"));
    }

console.log("thank you");

