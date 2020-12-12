const { inputs } = require("./part1");

const SLOPES = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

function solution(input) {
  function getTrees(xOffset, yOffset, x = 0, y = 0, count = 0) {
    if (y >= input.length) return count;
    return getTrees(
      xOffset,
      yOffset,
      x + xOffset,
      y + yOffset,
      count + (input[y][x % input[0].length] === "#" ? 1 : 0)
    );
  }
  return SLOPES.reduce((acc, offsets) => acc * getTrees(...offsets), 1);
}

console.log(solution(inputs));
