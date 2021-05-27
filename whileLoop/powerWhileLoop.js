const prompt = require("prompt-sync")();
var number = prompt("Enter number :");

let index = 1;
while (index <= number && Math.pow(2,index) <= 256) {
    console.log(Math.pow(2, index));
    index++;
}