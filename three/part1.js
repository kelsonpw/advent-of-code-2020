const fs = require("fs");
const path = require("path");

const inputs = fs
  .readFileSync(path.join(__dirname, "./input.txt"))
  .toString()
  .split("\n");

function solution(input, x = 0, y = 0, count = 0) {
  if (y >= input.length) return count;
  return solution(
    input,
    x + 3,
    y + 1,
    count + (input[y][x % input[0].length] === "#" ? 1 : 0)
  );
}

console.log(solution(inputs));

module.exports = { inputs };
