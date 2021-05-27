let a = Math.floor(Math.random()*100)
let day = ((a%31) + 1);
let month = ((a%12) + 1);

if(month==3 && day>20) {
    console.log("day is:" + day);
    console.log("month is:" + month);
    console.log("true");
} else if(month == 4) {
    console.log("day is:" + day);
    console.log("month is:" + month);
    console.log("true");
} else if(month == 5) {
    console.log("day is:" + day);
    console.log("month is:" + month);
    console.log("true");
} else if (month == 6 && day<20) {
    console.log("day is:" + day);
    console.log("month is:" + month);
    console.log("true");
} else {
    console.log("day is:" + day);
    console.log("month is:" + month);
    console.log("false");
}
