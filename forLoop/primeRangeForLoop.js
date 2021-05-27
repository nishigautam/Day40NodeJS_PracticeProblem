const prompt = require("prompt-sync")();
var number1 = prompt("Enter Number : ");
var number2 = prompt("Enter number : ");

if (number1 > number2) {
    lowerRange = number2;
    higherRange = number1;
} else {
    lowerRange = number1;
    higherRange = number2;
}

console.log(`Prime Numbers Between ${lowerRange} and ${higherRange} are :`);

for (var index = lowerRange; index <= higherRange; index++) {
    let flag = 0;
    for(let index2 = 2; index2 < index; index2++) {
        if(index % index2 == 0) {
            flag = 1;
            break;
        }
    }

    if (index > 1 && flag == 0) {
        console.log(index + " Prime Number");
    }
}