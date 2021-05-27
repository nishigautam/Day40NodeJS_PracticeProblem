const prompt = require("prompt-sync")();
var number = prompt("Enter Number : ");

let fact = 1;
for( var index = 2; index <= number; index++) {
    fact = fact*index;
}

console.log("Factorial of " + number + " is = " + fact);