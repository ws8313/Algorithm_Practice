function solution(arr1, arr2) {
    var answer = [];
    
    // for문을 2개 돌려서 2개의 배열에서 같은 인덱스를 가진 값을 서로 더해줌
    for (let i = 0; i < arr1.length; i++) { // [1, 2][2, 3]
        let temp = [];
        for (let j = 0; j < arr1[i].length; j++) { // arr1 배열의 길이 (2번)
            temp.push(arr1[i][j] + arr2[i][j]) // 1+3, 2+4 / 2+5, 3+6
        }
        answer.push(temp) // [4, 6],[7, 9]
    }
    return answer;
}