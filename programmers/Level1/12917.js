// 프로그래머스 12917번 문자열 내림차순으로 배치하기
function solution(s) {
    return s.split("").sort().reverse().join("");
}