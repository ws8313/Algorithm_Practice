function solution(n) {
    let num = Math.sqrt(n);
    // Math.sqrt() : 제곱근을 구해주는 math메소드
    if(num % 1 === 0 ) return (num+1) * (num+1)
    // 정수는 1로 나누었을 경우 항상 나머지가 0이 되는 속성을 이용해서 주어진 숫자가 정수인지 체크
    else return -1
}