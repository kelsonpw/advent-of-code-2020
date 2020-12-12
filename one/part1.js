const fs = require("fs");
const path = require("path");

const inputs = fs
  .readFileSync(path.join(__dirname, "./input.txt"))
  .toString()
  .split("\n")
  .map((v) => Number(v));

function solution(values) {
  return values.reduce((acc, v, idx, arr) => {
    let secondary;
    if (!acc) {
      for (let i = idx; i < arr.length; i++) {
        if (v + arr[i] === 2020) {
          secondary = arr[i];
          break;
        }
      }
      if (secondary) {
        return v * secondary;
      }
    }
    return acc;
  }, 0);
}

console.log(solution(inputs));

module.exports = { inputs };
