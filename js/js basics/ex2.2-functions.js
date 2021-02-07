function tellFortune(jobTitle ,location ,partnerName,numberOfChildren) {
 
    let output= jobTitle +    " in " + location + " married to " + partnerName + " with " + numberOfChildren + " children." ;
    return  output;
}

console.log(tellFortune("Chemistry Teacher", "Albuquerque","Skyler", 2));