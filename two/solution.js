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

console.log(inputs);
