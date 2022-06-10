// 백준 2941번 크로아티아 알파벳
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

let count = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === 'c') {
        if (input[i + 1] === '=' || input[i + 1] === '-') {
            count++;
            i++;
        }
        else {
            count++;
        }
    }
    else if (input[i] === 'd') {
        if (input[i + 1] === 'z' && input[i + 2] === '=') {
            count++;
            i += 2;
        }
        else if (input[i + 1] === '-') {
            count++;
            i++;
        }
        else {
            count++;
        }
    }
    else if (input[i] === 'l') {
        if (input[i + 1] === 'j') {
            count++
            i++;
        }
        else {
            count++;
        }
    }
    else if (input[i] === 'n') {
        if (input[i + 1] === 'j') {
            count++
            i++;
        }
        else {
            count++;
        }
    }
    else if (input[i] === 's') {
        if (input[i + 1] === '=') {
            count++
            i++;
        }
        else {
            count++;
        }
    }
    else if (input[i] === 'z') {
        if (input[i + 1] === '=') {
            count++
            i++;
        }
        else {
            count++;
        }
    }
    else {
        count++;
    }
}

console.log(count);