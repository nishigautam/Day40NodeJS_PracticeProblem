var minimum = Number.MAX_VALUE;
var maximum = Number.MIN_VALUE;
let checkRandom = 0;
let size = 5;

for(let index=0; index < size; index++) {
    checkRandom = Math.floor(Math.random() * 900 + 100);
    if(checkRandom > maximum)
        maximum = checkRandom;
    if(checkRandom < minimum)
        minimum = checkRandom;    
}

console.log("Minimum Value" + "=" + minimum);
console.log("Maximum Value" + "=" + maximum);