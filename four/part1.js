const fs = require("fs");
const path = require("path");

const inputs = fs
  .readFileSync(path.join(__dirname, "./input.txt"))
  .toString()
  .split(/\n\n/);

const REQUIRED = ["iyr", "hgt", "byr", "pid", "eyr", "hcl", "ecl"];

function solution(input) {
  return input.reduce((acc, val) => {
    const passport = val.split(/\n|\s/).reduce((acc, str) => {
      const [key, value] = str.split(":");
      return { ...acc, [key]: value };
    }, {});
    const requiredCount = REQUIRED.reduce(
      (acc, key) => acc + (!!passport[key] ? 1 : 0),
      0
    );
    return acc + (requiredCount === REQUIRED.length ? 1 : 0);
  }, 0);
}

console.log(solution(inputs));

module.exports = { inputs, REQUIRED };
