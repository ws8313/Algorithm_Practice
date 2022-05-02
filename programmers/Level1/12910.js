// 프로그래머스 12910번 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            ans.push(arr[i]);
        }
    }
    ans.sort((a, b) => a - b);
    // ans.sort()로 할 경우, 테스트 케이스 1번 return [10, 5]로 나옴 
    
    if (ans.length === 0) {
        ans.push(-1);
    }
    
    return  ans;
}