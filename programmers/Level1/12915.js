// 프로그래머스 12915번 문자열 내 마음대로 정렬하기
function solution(strings, n) {
    strings.sort(function(a,b) {
        if (a[n] === b[n]) {
            return (a > b) - (a < b);
        } else {
            return (a[n] > b[n]) - (a[n] < b[n]);
        };
    });
    return strings;
};