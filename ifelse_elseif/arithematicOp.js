const prompt = require("prompt-sync")();

var number1 = prompt("Enter First Number : ");
var number2 = prompt("Enter Second Number : ");
var number3 = prompt("Enter Third Number : ");

var operation1 = number1 + number2 * number3;
var operation2 = number1 % number2 + number3;
var operation3 = number3 + number1 / number2;
var operation4 = number1 * number2 + number3;

var maximum = operation1;
var minimum = operation1;

if(operation2 > maximum) {
    maximum = operation2;
} else if (operation3 > maximum) {
    maximum = operation3;
} else if (operation4 > maximum) {
    maximum = operation4;
} else if (operation2 < minimum) {
    minimum = operation2;
} else if (operation3 < minimum) {
    minimum = operation3;
} else if (operation4 < minimum) {
    minimum = operation4;
}

console.log("Maximum value = " + maximum);
console.log("Minimum Value = " + minimum);