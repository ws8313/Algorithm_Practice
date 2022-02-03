function solution(x) {
    var sum = 0;

    // x 값을 배열로 만들기 위해 String()을 사용해서 split함.
    var arr = String(x).split("");
    
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i])
    }
    return (x % sum == 0) ? true : false;
}