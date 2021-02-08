function circle_area(r) {
  return Math.PI * Math.pow(r, 2);
}

let rad = 2;
let area1 = circle_area(rad1);
let area2 = area1.toFixed(2);
console.log("Circle Area for raduis " + rad + "m is " + area1);
console.log("Rounded 2 decimal points: " + area2);
