console.log("Think of a number..")

const prompt = require("prompt-sync")();
var number = prompt();

let left = 1;
let right = 100;

while (left < right) {
    var middle = ((left+right)/2);
    console.log("Is Your Number " + middle + " ?")
    var check = prompt();
    if( check == 1) {
        console.log("Congrats! We Found Your Number")
        break;
    } else {
        console.log("Is your number smaller than " + middle);
        var less = prompt();
        if( less == 1) {
            right = (middle - 1);
        } else {
            left = (middle + 1);
        }
    }
}
