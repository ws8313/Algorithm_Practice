// 백준 2108번 통계학
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = input.shift();
const nums = input.map(Number);

// 최빈값을 구하기 위한 변수
let map = {};
let array = [];
let most = 0;

// 산술평균
function getAvg(arr) {
    let sum = 0;

    for (let i = 0; i < N; i++) {
        sum += arr[i];
    }

    // -0 일때 0으로 출력
    if (Math.round(sum / N) == -0) {
        return 0;
    }

    return Math.round(sum / N);
}

// 중앙값
function getCenter(arr) {
    arr.sort((a, b) => a - b);

    return arr[Math.floor(N / 2)];
}

// 최빈값
for (let num of nums) {
    if (map[num]) {
        map[num] = map[num] + 1;
    } else {
        map[num] = 1;
    }
}

let mostFrequency = Math.max(...Object.values(map));

for (let key in map) {
    if (map[key] === mostFrequency) {
        array.push(key);
    }
}
if (array.length > 1) {
    array = array.sort((a, b) => a - b);
    most = array[1];
} else {
    most = array[0];
}

// 범위
function getRange(arr) {
    nums.sort((a, b) => a - b);

    return arr[N - 1] - arr[0];
}

console.log(getAvg(nums));
console.log(getCenter(nums));
console.log(Number(most));
console.log(getRange(nums));