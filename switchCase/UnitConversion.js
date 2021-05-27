const prompt = require("prompt-sync")();
var number = prompt("Enter number :");
let choice = prompt("Enter Choice");

switch (choice) {
    case '1':
        console.log(number + " feet to Inch is :" + number*12);
        break;
    case '2':
        console.log(number + " feet to meter is :" + number/3.33);
        break;
    case '3':
        console.log(number + " Inches to feet is :" + number/12);
        break;
    case '4':
        console.log(number + " meter to feet is :" + number*3.33);
        break;
}