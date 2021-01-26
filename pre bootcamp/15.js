'use strict';
const input = require('readline-sync');


//input.question("Please enter the first string:\n");



function joinStrings(strArr1, strArr2) {
    
    let strArr3=[];
    let Arr3index = 0;


    for(let i = 0; i<=strArr1.length-1; i++){
        strArr3[Arr3index] = strArr1[i];
        Arr3index++;
    }

    for(let j=0;j<=strArr2.length-1;j++){
        strArr3[Arr3index]= strArr2[j];
        Arr3index++;
    }

    return   strArr3;
  }




let a = ["apple" , "seeds"];
let b = ["bootcamp"];
let c = ["WELCOME", "TO"];

console.log(joinStrings(c,joinStrings(a,b)));


   