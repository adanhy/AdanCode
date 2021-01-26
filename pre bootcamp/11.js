const input = require('readline-sync');

let myString = input.question("welcome to the palindrometer\nplease enter an input:\n");
let isPali = true;
for(let i =0 ; i < myString.length/2 ; i++){
if(myString[i]!=myString[myString.length-1-i]){
    console.log("NOT PALINDROME")
    return;
}
}
console.log("PALINDROM");


