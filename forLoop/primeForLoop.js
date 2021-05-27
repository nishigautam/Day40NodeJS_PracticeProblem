const prompt = require("prompt-sync")();
var number = prompt("Enter Number : ");
console.log(number);

for(var index = 2; index < number+1; index++) {
    if(index == number) {
        console.log("Number is Prime");
        return;
    } else if (number%index == 0){
        console.log("Number is not Prime");
        return;
    }
}