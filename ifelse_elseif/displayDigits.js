const prompt = require("prompt-sync")();
var digit = prompt("Enter digits :");

if(digit == 1) {
    console.log("Ones");
} else if (digit == 10) {
    console.log("Tens");
} else if (digit == 100) {
    console.log("Hundred");
} else if (digit == 1000) {
    console.log("Thousand")
} else if (digit == 10000) {
    console.log("Ten-Thousand");
}
