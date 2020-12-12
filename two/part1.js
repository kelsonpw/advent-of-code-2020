const fs = require("fs");
const path = require("path");

const inputs = fs
  .readFileSync(path.join(__dirname, "./input.txt"))
  .toString()
  .split("\n")
  .map((input) => {
    const [rangeStr, letterStr, password] = input.split(" ");
    const [low, high] = rangeStr.split("-").map((v) => Number(v));
    const letter = letterStr.replace(":", "");
    return { low, high, letter, password };
  });

function solution(data) {
  return data.reduce((acc, { low, high, letter, password }) => {
    const count = [...password].filter((s) => s === letter).length;
    const matches = count >= low && count <= high;
    return acc + (matches ? 1 : 0);
  }, 0);
}

console.log(solution(inputs));

module.exports = { inputs };
