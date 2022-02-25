function solution(arr) {
    var answer = [];
    
    if (arr.length <= 1) {
        return [-1];
		// 배열의 길이가 0, 1 일 경우 [-1] 리턴
    } else {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
        answer = arr;
		// 배열에서 가장 작은 요소를 찾고, 그것의 인덱스를 찾아서 하나 제거한다. 그리고 제거된 후 남은 배열을 반환.
    }
    return answer;
}