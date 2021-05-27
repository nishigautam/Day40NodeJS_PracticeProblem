const prompt = require("prompt-sync")();
var number = prompt("Enter Number : ");
console.log(number);

let count = 0;
for (var index=1; index < number; index++) {
    count = count+1/index;
}
console.log(count);