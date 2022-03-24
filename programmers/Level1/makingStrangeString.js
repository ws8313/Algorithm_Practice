function solution(s) {
    let arr = s.split(" ");
    let ans = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 !== 0) {
                ans = ans + arr[i][j].toLowerCase();
            } else {
                ans = ans + arr[i][j].toUpperCase();
            }
        }
        if (i < arr.length - 1) {
            ans = ans + " ";
        }
    }
    return ans;
}