// 프로그래머스 17681번 비밀지도
function solution(n, arr1, arr2) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        // 이진수로 바꿔주기 위해서 toString(2) 사용
        // 맨 앞 '0'이 생략되는 경우 길이를 맞춰주기 위해서 padStart 사용
        var array1 = arr1[i].toString(2).padStart(n, 0)
        var array2 = arr2[i].toString(2).padStart(n, 0)
        var row = "";
        
        for (let j = 0; j < n; j++) {
            if (array1[j] === "1" || array2[j] === "1") {
                row += "#"
            } else {
                row += " "
            }
        }
        answer.push(row)
    }
    return answer;
}