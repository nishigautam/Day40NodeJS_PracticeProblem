let rl = require('readline');
let prompts = rl.createInterface(process.stdin, process.stdout);
    prompts.question('Enter the Number :', (n) => {
        function palindrome() {
            var temp = 0;
            var reverse = 0;
            var number = n;
            while ( n > 0) {
                temp = n % 10;
                n = Math.floor(n/10);
                reverse = reverse * 10 + temp;
            }
            if ( number == reverse )
                console.log(" Palindrome Number ")
            else 
                console.log(" Not A Palindrome Number")
        }
        palindrome();
        prompts.close()
    });