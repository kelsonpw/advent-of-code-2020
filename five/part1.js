const fs = require("fs");
const path = require("path");

const inputs = fs
  .readFileSync(path.join(__dirname, "./input.txt"))
  .toString()
  .split("\n");

const LOWER = ["F", "L"];
const UPPER = ["B", "R"];

function computeSeatValue(seatData, left, right, prev = "") {
  if (!seatData.length) {
    if (LOWER.includes(prev)) return left;
    if (UPPER.includes(prev)) return right;
  }
  const [direction, ...dirs] = seatData;
  const mid = Math.floor((right - left) / 2) + left;
  if (LOWER.includes(direction)) {
    return computeSeatValue(dirs, left, mid, direction);
  }
  if (UPPER.includes(direction)) {
    return computeSeatValue(dirs, mid + 1, right, direction);
  }
  return -1;
}

function getComputedSeatData(input) {
  return input.map((inputStr) => ({
    row: computeSeatValue([...inputStr.substring(0, 7)], 0, 127),
    col: computeSeatValue([...inputStr.substring(7)], 0, 7),
  }));
}

function solution(input) {
  const seatData = getComputedSeatData(input);
  const seatIDs = seatData.map(({ row, col }) => row * 8 + col);
  return Math.max(...seatIDs);
}

module.exports = { inputs, getComputedSeatData };

console.log(solution(inputs));
