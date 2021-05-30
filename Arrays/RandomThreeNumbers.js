var numberArray = new Array();
for ( let index = 0; index < 10; index++ ) {
    numberArray[index] = (Math.floor(100 + Math.random() * 900));
    console.log( numberArray[index]);
}
numberArray.sort();
console.log("Second Largest = " + numberArray[numberArray.length - 2 ]);
console.log("Second Smallest = " + numberArray[1]);