function solution(n) {
    let result = n.toString().split("").sort().reverse().join("");
    // 자연수를 문자열로 변경, split으로 배열로 만듬
    // 배열의 순서를 sort로 오름차순으로 바꾸고, reverse로 뒤집어서 내림차순으로 변경
    // join한 다음 Number로 숫자로 변경
    return Number(result);
}  