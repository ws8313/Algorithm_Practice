// 프로그래머스 68644번 두 개 뽑아서 더하기
function solution(numbers) {
    var arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i != j) {
                arr.push(numbers[i] + numbers[j]);
            }
        }
    }
    arr.sort((a, b) => a - b);
    // Set 사용해서 중복제거
    var answer = [... new Set(arr)];
    return answer;
}

// 두번째 풀이
// 위의 경우보다 실행속도 더 빠름.
function solution(numbers) {
    var arr = [];
    for (let i = 0; i < numbers.length; i++) {
        // j + 1을 해줌으로써 같은 인덱스의 경우를 신경쓰지 않아도 된다.
        for (let j = i + 1; j < numbers.length; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }
    arr.sort((a, b) => a - b);
    var answer = [... new Set(arr)];
    return answer;
}

// 세번째 풀이
// 다른 사람 풀이 참고
function solution(numbers) {
    var arr = [];
    for (let i = 0; i < numbers.length; i++) {
        // j + 1을 해줌으로써 같은 인덱스의 경우를 신경쓰지 않아도 된다.
        for (let j = i + 1; j < numbers.length; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }
    // arr를 정렬하는게 아니라 return값에 바로 정렬을 함. 실행속도 더 빠름.
    // answer.sort() 하고 return answer의 경우보다 실행속도 빠름.
    var answer = [... new Set(arr)];
    return answer.sort((a, b) => a - b);
}