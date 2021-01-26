'use strict';

var input = require('readline-sync');

let kosher, kosherM;

let foodType = ["Italian", "Thai","Indian","Turkish"];
let restListNotKosher = ["the Italian restaurant - not kosher", "the Thai restaurant not kosher","the Indian restaurant not kosher","the Turkish restaurant not kosher"];
let restListNormalKosher = ["the Italian restaurant - normal kosher", "the Thai restaurant - normal kosher","the Indian restaurant - normal kosher","the Turkish restaurant - normal kosher"];
let restListMehadrinKosher = ["the Italian restaurant - mehadrin kosher", "the Thai restaurant - mehadrin kosher","the Indian restaurant - mehadrin kosher","the Turkish restaurant - mehadrin kosher"];

let chosenKashrot;

console.log("Hello and welcome to my restaurant recommendation program\n");


let num1 = Number(input.question("How many people are you going with?\n"));
if (isNaN(num1) || !Number.isInteger(num1)){

    console.error("stop execution");
    return;

}
//console.log(typeof num1);
//console.log(num1);

kosher = input.keyInYN("Should the restaurant be kosher?\n");

if (kosher === true){
    //console.log("IT IS KOSHER");
    kosherM = input.keyInYN("Should it be Kashrut Lemehadrin?\n");
    if(kosherM ===true){
      //  console.log("IT IS KOSHER M");
      chosenKashrot=restListMehadrinKosher;
    }
    else if (kosherM ===false){
        //console.log("IT IS NOT KOSHER M");
        chosenKashrot=restListNormalKosher;
    }

    else{
        console.error("stop execution");
        return;
    }
}
else if(kosher ===false){
    //console.log("NO KOSHER");
    chosenKashrot=restListNotKosher;
}

else{
    console.error("stop execution");
    return
}


let index = input.keyInSelect(foodType, "What kind of food do you want?");

console.log("I recommend " + chosenKashrot[index]);















