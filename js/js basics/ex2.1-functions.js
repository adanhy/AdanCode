function describeCountry(country ,population ,capitalCity) {
 
    let output=country+ " has " + population + " million people and it's capital city is " +capitalCity ;

    return  output;
  
}
let arg = describeCountry("Argentina",10,"Buenos Aires");
let grc = describeCountry("Greece",9,"Athenes");
let itl = describeCountry("Italy",13,"Rome");
console.log(arg);
console.log(grc);
console.log(itl);
