'use strict';

const input = require('readline-sync');

let result=1;


let num=Number(input.question("Please enter a positive integer:\n"));

while(!Number.isInteger(num) || Number(num)<=0){
    num=Number(input.question("Please enter a positive integer:\n"));
    //console.log(Number.isInteger(num));
}
//console.log(Number.isInteger(num));
//console.log(typeof num);

/*
while(!Number.isInteger(num)){
    num=Number(input.question("Please enter a positive integer:\n"));
}
*/
for(let i=1; i<= num;i++){
result = result*i;
    }


console.log("THE RESULT:\n"+ num + " FATORIAL is = " + result);