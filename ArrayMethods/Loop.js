const cars = ["suzuki", "volvo", "Bmw", "Ford"];
let len = cars.length;
let element = ""; // use let

do {
  element += cars[1] + "/n";
} while (len >= 3);

console.log(element); // print the final string
