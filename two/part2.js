const { inputs } = require("./part1");

function solution(inputs) {
  return inputs.reduce((acc, { high, low, letter, password }) => {
    const counts =
      (password[low - 1] === letter ? 1 : 0) +
      (password[high - 1] === letter ? 1 : 0);
    return acc + (counts === 1 ? 1 : 0);
  }, 0);
}

console.log(solution(inputs));
