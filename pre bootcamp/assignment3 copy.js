'use strict';

const input = require('readline-sync');
const figlet = require('figlet');
const randomWords = require('random-words');
let attLeft = 10;
let theWord = randomWords();
let printWord = "";
let i;
let isSolved = false;
let playerGuess = "";
console.log(figlet.textSync('HANG MAN',{font:'univers'}));
console.log(theWord);

for( i=0 ; i <theWord.length;i++){
    printWord=printWord+"*";
}


while(attLeft>0 && !isSolved){
    
    console.log(`you have ${attLeft} guesses\n`)
    
    console.log(`the word is ${printWord}`);

    playerGuess = input.question("what is your guess?\n");
    
    if(playerGuess == theWord){ //player guesses the whole word
        isSolved = true;
    }else{
        if(theWord.search(playerGuess) != -1){
            while(theWord.search(playerGuess)){
                console.log("inside while");
                printWord[theWord.indexOf(playerGuess)] = playerGuess;
            }
        }
        attLeft--;
    }
     //player guesses a single cher

}


/*
figlet('HANG MAN', {font: 'univers', width: 120}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});


*/
