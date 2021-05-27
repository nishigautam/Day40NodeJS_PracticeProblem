const prompt = require("prompt-sync")();
var number = prompt("Enter Number of Powers");
console.log(number);

let power = 1;
for (var index = 0; index < number; index++) {
    power = 2*power;
    console.log(power);
}