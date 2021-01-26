'use strict';

const MAX = 50;
const MIN = 1;
const input = require('readline-sync');

let arrSize = Number(input.question(`welcome \nplease enter your input:\n`));
let arr = new Array(arrSize);
let min=50,max=1;//constants in the ex.

for(let i=0;i<=arrSize-1;i++){
    arr[i] = Math.floor((Math.random() * MAX) + MIN);

    if(arr[i]>max){ //no need to do another loop, we can check for min and max during the filling of our array.
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];
    }
}

//console.log(arr);
console.log("min is " + min);
console.log("max is " + max);






