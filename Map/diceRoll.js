var diceRoll = new Map();

diceRoll.set(1,1);
diceRoll.set(2,2);
diceRoll.set(3,3);
diceRoll.set(4,4);
diceRoll.set(5,5);
diceRoll.set(6,6);

while(1) {
    var key = Math.floor((Math.random() * 6) + 1);
    var value = diceRoll.get(key);
    value++;
    diceRoll.set(key, value);
    if(  value == 10 ) {
        break;
    }
}
var minValue = 10;
for (let [key, value] of diceRoll) {
    if( value == 10 )
        var maxValue = key;
    if( minValue > value ) {
        var minValue = key;
        minValue = value;
    }
}
console.log("Maximum Dice Number Occurrence : " + maxValue);
console.log("Minimum Dice Number Occurrence : " + minValue);