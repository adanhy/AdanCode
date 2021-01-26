'use strict';

const input = require('readline-sync');


for(let i=1;i<100;i++){
    if(i%7 == 0)   {
        console.log("BOOM")
    }
    //else if(i/10 <8 && i/10>=7){
    //        console.log("BOOM");
    //    }
    else if(i/10===7){
        console.log("BOOM");
    }
        else{
            console.log(i);
        }
    } 


