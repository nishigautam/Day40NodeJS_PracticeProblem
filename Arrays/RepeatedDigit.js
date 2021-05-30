var digitArray = new Array();
var count = 0;

for ( let index = 0; index <= 100; index++) {
    if(Math.floor(index/10) == (index % 10)) {
        digitArray[count] = index;
        count++;
    }
}
console.log("Repeated Digits are : " + digitArray);