'use strict';

const input = require('readline-sync');
const CardSymbols=["♣","♦","♥","♠"];
const strtAmt = 50;

let plr1Cash = strtAmt;
let plr2Cash = strtAmt;
let plr1Bet = 0;
let plr2Bet = 0;
let card1Value,card1Suit,card2Value,card2Suit;
let newRound = true;
//let isDraw=true;

//var card = {
//    num: Math.floor((Math.random()*12)+1),
//    symbol: CardSymbols[Math.floor((Math.random()*3))]
//};

//let arrSize = Number(input.question("welcome \nplease enter your input:\n"));

console.log(`
=======================================================
//////////----------Welcome To War----------\\\\\\\\\\
=======================================================
`);

let plr1Name = input.question("Please enter player 1 name:\n");
let plr2Name = input.question("Please enter player 2 name:\n");

console.log(`Hello ${plr1Name}, You currently have ${plr1Cash} NIS`);
console.log(`Hello ${plr2Name}, You currently have ${plr2Cash} NIS\n`);

//console.log(`${plr1Name} please place your bet[1-${plr1Cash}]`);

while(newRound && plr1Cash>0 && plr2Cash>0){

    plr1Bet = Number(input.question(`${plr1Name} please place your bet[1-${plr1Cash} NIS]:`));
    while(plr1Bet>plr1Cash){ 
        plr1Bet = Number(input.question(`${plr1Name} please place a valid bet[1-${plr1Cash} NIS]:`));
    }


    plr2Bet = Number(input.question(`${plr2Name} please place your bet[1-${plr2Cash} NIS]:`));
    while(plr2Bet>plr2Cash){
        plr2Bet = Number(input.question(`${plr2Name} please place a valid bet[1-${plr2Cash} NIS]:\n`));
    }

    card1Value= Math.floor((Math.random()*12)+1);
    card1Suit= CardSymbols[Math.floor((Math.random()*3))];
    card2Value = Math.floor((Math.random()*12)+1);
    card2Suit= CardSymbols[Math.floor((Math.random()*3))];

    console.log(`${plr1Name} your card is: ${card1Value} ${card1Suit}`);
    console.log(`${plr2Name} your card is: ${card2Value} ${card2Suit}\n`);

    if(card1Value>card2Value){
        plr1Cash=plr1Cash+plr1Bet;
        plr2Cash=plr2Cash-plr2Bet;
        console.log(`${plr1Name} you WON ${plr1Bet} NIS! you now have ${plr1Cash} NIS`);
        console.log(`${plr2Name} you LOST ${plr2Bet} NIS! you now have ${plr2Cash} NIS\n`);

        if(plr1Cash>0 && plr2Cash>0){
            if(plr1Cash!=plr2Cash){
                newRound= input.keyInYNStrict("Play Another Round?");
            }
            else{
                console.log(`
                NO DRAWS IN THIS WAR
                LETS GO ANOTHER ROUND`);
                newRound=true;
            }
        }   
        else{
            newRound=false;     
        }
    }

    else if(card2Value>card1Value){
        plr2Cash=plr2Cash+plr2Bet;
        plr1Cash=plr1Cash-plr1Bet;
        console.log(`${plr2Name} you WON ${plr2Bet} NIS! you now have ${plr2Cash} NIS`);
        console.log(`${plr1Name} you LOST ${plr1Bet} NIS! you now have ${plr1Cash} NIS\n`);
        if(plr1Cash>0 && plr2Cash>0){
            if(plr1Cash!=plr2Cash){
                newRound= input.keyInYNStrict("Play Another Round?");
            }
            else{
                console.log(`NO DRAWS IN THIS WAR`);
                newRound=true;
            }
        }
        else{
        newRound=false;
        }

    }
    else{  //draw
        console.log("ITS A DRAW. BET AGAIN");
        newRound = true;
    }

}

console.log(`===============================
GAME OVER!\n
${plr1Name} You Have ${plr1Cash} NIS
${plr2Name} You Have ${plr2Cash} NIS\n`);

if(plr1Cash>plr2Cash){
    console.log(`${plr1Name} CONGRATS YOU WON THE WAR!`);
}
else if (plr1Cash<plr2Cash){
    console.log(`${plr2Name}, CONGRATS YOU WON THE WAR!`);
}
else{
    console.log(`IF YOU GOT HERE THERE IS AN ERROR`);
}




