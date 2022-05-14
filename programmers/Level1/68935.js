// 프로그래머스 68935번 3진법 뒤집기
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}