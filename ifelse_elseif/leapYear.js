let year = Math.floor(Math.random()*10000);
console.log(year);
if(year%4 == 0) {
    if(year%100 == 0) {
        console.log("This is not a leap year");
    } else if(year%400 == 0){
        console.log("This Year is a Leap Year");
    } else {
        console.log("This is a leap year")
    }
}
else {
    console.log("Year is not a leap Year");
}
