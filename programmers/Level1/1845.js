// 프로그래머스 1845번 폰켓몬
function solution(nums) {
    var limit = nums.length / 2;
    var arr = [...new Set(nums)]
    return arr.length > limit ? limit : arr.length;
}