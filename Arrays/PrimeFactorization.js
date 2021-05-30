let rl = require('readline');
let prompts = rl.createInterface(process.stdin, process.stdout);
prompts.question('enter the number = ', (number) => {
    var tempValue = number;
    var count = 0;
    var primeFact = new Array();
    for ( var index =2; index <= number/2; index++) {
        if( tempValue % index == 0 ) {
            tempValue = tempValue / index;
            primeFact[count] = index;
            count++;
            index--;
        }
    }
    console.log("Prime Factors of " + number + " = " + primeFact);
    prompts.close()
});