// 프로그래머스 12916번 문자열 내 p와 y의 개수
function solution(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}