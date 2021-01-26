'use strict';

const input = require('readline-sync');
const chalk = require('chalk');
const figlet = require('figlet');
const randomWords = require('random-words');
let attLeft = 10;
let theWord = randomWords();
let i;
let j;
let isSolved = false;
let playerGuess;
console.log(figlet.textSync("HANG MAN",{font:'univers'}));


//console.log(theWord); //for testing only


let wordArr=theWord.split('');

let toPrint = theWord.split('');

for(let k = 0 ; k < theWord.length; k++){
    toPrint[k]='*';
}


while(attLeft>0 && !isSolved){
    
    console.log(chalk.yellow(`you have ${attLeft} guesses`));
    console.log(`the word is ${toPrint.join('')}`);

    playerGuess = input.question(chalk.green("what is your guess?\n"),{limit: /[a-zA-Z]+/ , limitMessage: 'please enter one a-z letter or the WHOLE word'}).toLocaleLowerCase();
    let pgArr = playerGuess.split('');
    j=wordArr.indexOf(pgArr[0]);
    if(playerGuess == theWord){ //player guesses the whole word correct
        isSolved = true;
        
    }
    else if(j>=0 && playerGuess.length==1){
        
       
        for(let k=0;k<wordArr.length;k++){ 
           
            
            if(wordArr[k]==pgArr[0]){
                toPrint[k] = pgArr[0];
                
            }
        }
        if(toPrint.indexOf('*')==-1){
            isSolved=true;
        }
    }
    else{
        attLeft--;
    }

}

if(isSolved){
    console.log(chalk.blue.bold("GOOD JOB YOU WON!!!"));
}
else{
    console.log(chalk.red.bold("GAME OVER YOU LOST"));
}
