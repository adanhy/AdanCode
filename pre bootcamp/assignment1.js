'use strict';

const input = require('readline-sync');
 
let index;
let seasonSumResults = [0,0,0,0]
let seasonsArray= ["WINTER\nYOU KNOW NOTHING JOHN SNOW!","SPRING\nYOU ALERGY MACHINE!","SUMMER\nSUNKISSED ALL DAY","FALL\nALL THE LEAVES ARE BROWN!"];


console.log(`

===================================================
HELLO AND WELCOM TO OUR BRAND NEW QUIZ

        ** WHAT SEASON ARE YOU? **

please answer the following questions and we will 
let you know what season are you.

GOOD LUCK!!

===================================================
`);

let myQuest1 = {
    questText : '1st question:\nWHAT COLOR DO YOU LIKE MOST?',
    qusetAnswers : ["GREY","ORANGE","GREEN","BLUE"],
    AnswerValues : [0,3,1,2]
};

index = input.keyInSelect(myQuest1.qusetAnswers, myQuest1.questText, {cancel: false});
seasonSumResults[myQuest1.AnswerValues[index]]++;
//console.log("index is: " + index);

let myQuest2 = {
    questText : '2nd question\nHOW MUCH DO YOU LOVE ICE CREAM?',
    qusetAnswers : ["VERY MUCH","AVERAGE","NOT AT ALL","VERY LITTLE"],
    AnswerValues : [2,1,0,3]
};

index = input.keyInSelect(myQuest2.qusetAnswers, myQuest2.questText,{cancel: false});
seasonSumResults[myQuest2.AnswerValues[index]]++;
//console.log("index is: " + index);

let myQuest3 = {
    questText : '3rd question\nFAVORITE HOLIDAY?',
    qusetAnswers : ["THANKSGIVING","4th of JULY","XMAS","EASTER"],
    AnswerValues : [3,2,0,1]
};

index = input.keyInSelect(myQuest3.qusetAnswers, myQuest3.questText, {cancel: false});
seasonSumResults[myQuest3.AnswerValues[index]]++;
//console.log("index is: " + index);

let myQuest4 = {
    questText : '4th question\nWHAT WOULD YOU RATHER DRINK?',
    qusetAnswers : ["FRUIT-SHAKE","PUMPKIN LATE","HOT CHOCOLATE","SMOOTHIE"],
    AnswerValues : [2,3,0,1]
};

index = input.keyInSelect(myQuest4.qusetAnswers, myQuest4.questText,{cancel: false});
seasonSumResults[myQuest4.AnswerValues[index]]++;
//console.log("index is: " + index);

let myQuest5 = {
    questText : '5th question\nHOW OFTEN DO YOU GO TO THE BEACH?',
    qusetAnswers : ["WHAT BEACH?","EVERYWEEK","EVERY NOW AND THEN","RARELY"],
    AnswerValues : [0,2,1,3]
};
index = input.keyInSelect(myQuest5.qusetAnswers, myQuest5.questText, {cancel: false});
seasonSumResults[myQuest5.AnswerValues[index]]++;
//console.log("index is: " + index);

let maxIndex=0, maxValue=0;
let i=0;

//console.log("your i is=" + i);

while(i<seasonSumResults.length){
    if(seasonSumResults[i]>=maxValue){
        maxIndex=i; //console.log("max index" + maxIndex);
        maxValue=seasonSumResults[i]; //console.log("max value is = "+ maxValue);
    }
    i++;
}

console.log("\n\n##################\nYOUR RESULT IS:\n##################\n"+ seasonsArray[maxIndex]+ "\n#################");

    
//console.log(seasonSumResults);