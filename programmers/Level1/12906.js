// 프로그래머스 12906번 같은 숫자는 싫어

// for문 사용
function solution(arr) {
    // let answer 사용하면 효율성 검사 오답
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i])
        }
    }
    return answer;
}

// filter 사용
function solution(arr) {
    return arr.filter((val, index) => val !== arr[index + 1]);
}