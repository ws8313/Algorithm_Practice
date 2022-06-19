// 백준 11050번 이항 계수 1
const filePath = process.platform === "linux" ? "dev/stdin" : "./예제.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");
const N = Number(input[0]);
const K = Number(input[1]);

const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(N) / (factorial(K) * factorial(N - K)));