// 백준 10250번 ACM 호텔
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const HWN = input[i].split(' ');
  let H = Number(HWN.shift());
  HWN.shift();
  let N = Number(HWN.shift());
  // let count = 1;

  // while (N > H) {
  //   count++;
  //   N = N - H;
  // }
  
  // if (count < 10) {
  //   console.log(`${N}0${count}`);
  // }
  // else {
  //   console.log(`${N}${count}`);
  // }

  const floor = N % H === 0 ? H : N % H;
  const roomNum = Number.isInteger(N / H) ? N / H : Math.ceil(N / H);

  if (roomNum < 10) {
    console.log(`${floor}0${roomNum}`);
  }
  else {
    console.log(`${floor}${roomNum}`);
  }
}