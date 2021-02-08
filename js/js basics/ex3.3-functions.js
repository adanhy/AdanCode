'use strict';

const popOfWorld = 7900;

function percentageOfWorld1(population) {
  return population / popOfWorld * 100;
}
let c1 = 'Australia';
let p1 = 25;

let c2=`Nigeria`;
let p2=201;

let c3=`Denmark`;
let p3=6;

console.log(`${c1} has a population of ${p1} million people which is ${percentageOfWorld1(p1).toFixed(2)} %`);

console.log(`${c2} has a population of ${p2} million people which is ${percentageOfWorld1(p2).toFixed(2)} %`);

console.log(`${c3} has a population of ${p3} million people which is ${percentageOfWorld1(p3).toFixed(2)} %`);

let percentageOfWorld2 = function (population){
  return population / popOfWorld * 100;
}

console.log(`${c1} has a population of ${p1} million people which is ${percentageOfWorld2(p1).toFixed(2)} %`);
console.log(`${c2} has a population of ${p2} million people which is ${percentageOfWorld2(p2).toFixed(2)} %`);
console.log(`${c3} has a population of ${p3} million people which is ${percentageOfWorld2(p3).toFixed(2)} %`);

