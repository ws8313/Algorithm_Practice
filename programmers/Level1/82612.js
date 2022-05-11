// 프로그래머스 82612번 부족한 금액 계산하기
function solution(price, money, count) {
    var answer = 0;
    var total = 0;
    for (let i = 1; i <= count; i++) {
        total += price * i
    }
    answer = total - money;
    // 돈이 부족하지 않은 경우 0을 출력하기 위해 삼항 연산자 사용
    return money > total ? 0 : answer;
}