// 프로그래머스 12953번 N개의 최소공배수
function solution(arr) {
    return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

function getGcd(a, b) {
    if (b === 0) {
        return a;
    }
    return getGcd(b, a % b);
}