function solution(num) {
    var count = 0;
    
    // num이 1이거나 count가 500이상이 되기 전까지 반복하기 위해서 while문 사용.
    while (num !== 1 && count <= 500) {
        if (num % 2 === 0) {
            num /= 2;
            count++;
        } else {
            num = (num * 3) + 1;
            count++;
        }
    }
    // count가 500이상이라면 -1을 return함.
    if (count >= 500) return -1;
    return count;
}