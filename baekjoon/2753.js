let year = Number(require('fs').readFileSync('/dev/stdin').toString());

let num = 0;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    num = 1;
}

console.log(num);