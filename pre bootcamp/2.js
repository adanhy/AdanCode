
(function(){
'use strict';
const input = require('readline-sync');
checkSumEqualsTen(input.question("Hello, please enter the 1st Number\n"),input.question("please enter the 2nd Number\n"));

function checkSumEqualsTen(n1,n2){
    
    if(Number(n1) + Number(n2) == 10){
    console.log("makes 10")
} else
{console.log("nope")}
}


})();