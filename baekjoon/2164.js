// 백준 2164번 카드2
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());

// 시간초과
const arr = [];
for (let i = 0; i < input; i++) {
    arr[i] = i + 1;
}

while(arr.length != 1) {
    arr.shift();
    arr.push(arr.shift());
}

console.log(arr[0]);

