// 프로그래머스 12903번 가운데 글자 가져오기
function solution(s) {
    if (s.length % 2 === 0) {
        return s[(s.length / 2) - 1] + s[(s.length / 2)];
    } else {
        // return s[Math.floor(s.length / 2)];
        return s[parseInt(s.length / 2)];
    }
}