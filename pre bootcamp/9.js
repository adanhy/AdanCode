'use strict';

const input = require('readline-sync');

let n;

while(!Number.isInteger(n) || Number(n)<=2){
    n=Number(input.question("Please enter a positive integer larger than 1:\n"));
   
}


for(let i = 2 ; i<=n ; i++){
    let k=0;;
    for(let j=2;j<i;j++){
        if(i%j ==0){
           k=1;; break;
            
        }
    }
    if(k==0){
        console.log(i);
    }
    }
    
  


