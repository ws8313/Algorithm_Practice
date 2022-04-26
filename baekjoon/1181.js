// 백준 1181번 단어 정렬
const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = + input[0];
const _set = new Set();

for(let i = 1; i <= n; i++) {
    _set.add(input[i]);
};

const words = [..._set];

words.sort((a, b) => {
    if (a.length === b.length) return a > b ? 1 : -1;
    else return a.length > b.length ? 1 : -1;
});

words.forEach((v) => {
    console.log(v);
});