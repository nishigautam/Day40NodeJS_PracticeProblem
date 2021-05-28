let rl = require('readline');
let prompts = rl.createInterface(process.stdin,process.stdout);
function celciusToFahrenheit() {
    prompts.question("Enter temperature between 0 to 100 : " , celcius => {
        if( celcius >= 0 && celcius <= 100 ) {
            var fahrenheit = celcius * 9 / 5 + 32 ;
            console.log("Fahrenheit = " + fahrenheit);
        } else {
            console.log("Invalid Input..!");
            prompts.close()
        }
    });
}

function fahrenheitToCelcius() {
    prompts.question("Enter temperature between 0 to 100 :" , fahrenheit => {
    if (fahrenheit >= 32 && fahrenheit <= 212) {
        var celcius = (fahrenheit - 32) * 5 / 9;
        console.log("Celcius = " + celcius);
    } else {
        console.log("Invalid Input..!");
        prompts.close()
    }
    });
}

prompts.question("1.Celcius to Fahrenheit \n2.Fahrenheit to Celcius", choice => {
    switch(choice) {
        case '1' : 
            celciusToFahrenheit() ;
            break;
        case '2' : 
            fahrenheitToCelcius() ;
            break;
        default :
            console.log("Wrong Input for Choice!! ");
    }
    prompts.close()
});