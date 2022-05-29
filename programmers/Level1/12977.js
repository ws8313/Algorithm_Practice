// 프로그래머스 12977번 소수 만들기
function solution(nums) {
    var answer = 0;
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                let count = 0;
                
                for (let n = 1; n <= sum; n++) {
                    if (sum % n == 0) {
                        count++;
                    }
                }
                if (count == 2) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}