// 백준 4101번 크냐?
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

while (true) {
    // Number로 바꿔주지 않아서 계속 오답
    let nums = input.shift().split(' ').map(Number);

    if (nums[0] == 0 && nums[1] == 0) {
        break;
    }
    else if (nums[0] > nums[1]) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
}