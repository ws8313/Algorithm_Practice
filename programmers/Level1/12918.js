// 프로그래머스 12918번 문자열 다루기 기본
function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    } else {
        const tmp = s.split("")
        for (let i = 0; i < tmp.length; i++) {
            if(isNaN(tmp[i])) {
                return false;
            }
        }
    }
    return true;
}
// isNaN() 함수는 어떤 값이 NaN인지 판별합니다.
// NaN : Not-A-Number(숫자가 아님)