var arrayInteger = new Array();

for (let index = 0; index < 10; index++ ){
    arrayInteger[index] = (Math.floor(100 + Math.random() * 900));
}
console.log("Array : " + arrayInteger);
var isSumZero = 0;
for ( let index1 = 0; index1 < 8; index1++ ){
    for(let index2 = index1 + 1; index2 < 9; index2++){
        for(let index3 = index2 + 1; index3 < 10; index3++) {
            if( arrayInteger[index1] + arrayInteger[index2] + arrayInteger[index3] == 0) {
                console.log(arrayInteger[index1] + " + " + arrayInteger[index2] + " + "
                + arrayInteger[index3] + " = 0 ");
                isSumZero = 1;
            }
        }
    }
}

if( isSumZero == 0) {
    console.log("No Three Integer Sum is Zero");
}