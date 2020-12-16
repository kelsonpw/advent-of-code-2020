const fs = require("fs");
const path = require("path");

const inputs = fs
  .readFileSync(path.join(__dirname, "./input.txt"))
  .toString()
  .split(/\n\n/);

function solution(input) {
  const groups = input.map((i) => i.split(/\n/));
  const yesByGroup = groups.map((group) => {
    const allAnswers = group.join("").split("");
    const uniq = new Set(allAnswers);
    return uniq.size;
  });
  const totalYeses = yesByGroup.reduce((acc, v) => acc + v, 0);
  return totalYeses;
}

console.log(solution(inputs));

module.exports = { inputs };
