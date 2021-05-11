const isTenThousand = require('is-ten-thousand');
const readlineSync = require('readline-sync');

let ok = false;

do {
    let input = readlineSync.question('enter 10000: ');
    let x = parseInt(input, 10);
    ok = isTenThousand(x);
} while (!ok);

console.log('We are there!');
