const input = require('readline-sync');

let myString = input.question("welcome to the longest word show\nplease enter your input:\n");

let words = myString.split(' ');

let maxWord = "";

for(let i = 0 ; i <= words.length-1;i++){
    if(!words[i].match(/[0-9^\p{L}\d\s!@#$%^&*()_+:"|<>?]/) && maxWord.length < words[i].length){//hope i got the regex right.
        maxWord=words[i];
    }
}

console.log("############################\nYour longest word is:\n" + maxWord);