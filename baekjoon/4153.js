// 백준 4153번 직각삼각형
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let nums = input.map((a) => a.split(" ").map(Number).sort((a, b) => a - b));

for (let i = 0; i < input.length; i++) {
    if (nums[i][0] == 0 && nums[i][1] == 0 && nums[i][2] == 0) {
        break;
    }
    nums[i][0] * nums[i][0] + nums[i][1] * nums[i][1] == nums[i][2] * nums[i][2] 
    ? console.log("right") 
    : console.log("wrong");
}