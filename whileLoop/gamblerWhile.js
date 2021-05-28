console.log("Gambling starts with Rs. 100..")
var amt = 100;
var count = 0;
var betCount = 0;

while ( amt > 0 && amt < 200) {
    var bet = Math.floor(Math.random()*2);
    if (bet == 0) {
        amt = amt - 1;
    } else if (bet == 1) {
        amt = amt + 1;
        count = count + 1;
    }
    betCount = betCount+1;
}

console.log(amt);
console.log(count);
console.log(betCount);