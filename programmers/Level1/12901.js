// 프로그래머스 12901번 2016년
function solution(a, b) {
    var weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    // 윤년은 2월이 29일까지 있고, 1년이 366일이다.
    var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // b = 1 일 때 FRI이기 때문에 + 4
    var day = b + 4;
    for (let i = 0; i < a - 1; i++) {
        day += month[i];
    }
    return weeks[day % 7];
}

// Date 사용, 실행시간이 위의 경우보다 매우 김
function solution(a, b) {
    return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
}