function isPrime(number) {
    for ( var index = 2; index < number + 1; index++) {
        if ( index == number ) {
            return true;
        } else if ( number%index == 0) {
            return false;
        }
    }
}

function isPalindrome(number) {
    var string = "";
    var str = number.toString();
    for (var i = str.length - 1; i >= 0; i--) {
        string = string + str[i];
    }
    return string;
}

function checkPrimePalindrome(number) {
    if(isPrime(number)) {
        str2 = isPalindrome(number);
    } else {
        return "Given Number" + number + "is not Prime";
    }
    if (isPrime(str2)) {
        return "The number" + number + " is palindrome and prime ";
    } else {
        return "The number" + number + " is palindrome but not prime";
    }
}

const prompt = require('prompt-sync')();
var result = prompt("Enter number :");
console.log("Number generated is : " + result);
console.log(checkPrimePalindrome(result));