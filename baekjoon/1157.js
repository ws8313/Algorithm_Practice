let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().toLowerCase();
// 문자 구분을 위해 모두 소문자로 변경

// a ~ z 까지의 배열 생성
const Arr = new Array(26).fill(0);
// [0, 0, 0 ... 0, 0, 0] 26개의 0이 있는 배열

// input의 길이만큼 반복하면서 charCodeAt()을 사용하여 숫자로 변환, 아스키 코드 a(97) 만큼을 빼고 그 숫자를 배열의 인덱스로 설정하고 값을 1씩 추가
for (let i = 0; i < input.length; i++) {
    Arr[input.charCodeAt(i) - 97] ++;
}

// 배열에서 최댓값 구하기 
// 첫번째 제출 (Arr) => (...Arr)로 수정 후 제출 정답
const max = Math.max(...Arr);

// 최댓값의 인덱스 구하기
const idx = Arr.indexOf(max);

// 중복값이 있을 시 출력을 위해 false로 설정
let same = false;

// 중복값 확인하고 중복값이 있을시 same = false를 true로 설정
for (let j = 0; j < 26; j++) {
    if (Arr[j] === max && idx != j) {
        same = true;
        break;
    }
}

// 중복값이 있을 시 "?"을 출력하고 아닐 시 해당 idx 값에서 65를 더한 값을 문자열로 반환
console.log(same ? "?" : String.fromCharCode(idx + 65));