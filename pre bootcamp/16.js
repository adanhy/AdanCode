'use strict';
//const input = require('readline-sync');
const arr =[1,5,9,7,2,4,7,5];



function reverseArray(arr) {

    let temp=null;
    let arrSize = arr.length;

    for(let i = 0;i<=Math.floor((arrSize-2)/2);i++){//"splitiing the array"
        temp=arr[i];
        arr[i]=arr[arrSize-i-1];
        arr[arr.length-i-1]=temp;
    }

    return arr;

}
console.log("ARRAY:\n" + arr +"\nthis is the reversed array:\n" + reverseArray(arr));

