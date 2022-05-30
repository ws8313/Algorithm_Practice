// 프로그래머스 12951번 JadenCase 문자열 만들기
function solution(s) {
    s = s.toLowerCase();
    
    var answer = s.split(' ').map(s => {
        let arr = s.split('');
        if (arr[0]) {
            arr[0] = arr[0].toUpperCase();
        }
        return arr.join('');
    }).join(' ');
    
    return answer;
}