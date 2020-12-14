const { inputs, REQUIRED } = require("./part1");

const VALIDATIONS = [
  ["byr", (v) => v.length === 4 && +v >= 1920 && +v <= 2002],
  ["iyr", (v) => v.length === 4 && +v >= 2010 && +v <= 2020],
  ["eyr", (v) => v.length === 4 && +v >= 2020 && +v <= 2030],
  [
    "hgt",
    (v) => {
      const nums = Number(v.replace(/\D/g, ""));
      const letters = v.replace(/\d/g, "");
      if (letters === "cm") {
        return nums >= 150 && nums <= 193;
      }
      if (letters === "in") {
        return nums >= 59 && nums <= 76;
      }
      return false;
    },
  ],
  ["hcl", (v) => !!v.match(/^#([0-9]|[a-f]){6}$/)],
  ["ecl", (v) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(v)],
  ["pid", (v) => !!v.match(/^[0-9]{9}$/)],
];

function solution(input) {
  return input.reduce((acc, val) => {
    const passport = val.split(/\n|\s/).reduce((acc, str) => {
      const [key, value] = str.split(":");
      return { ...acc, [key]: value };
    }, {});
    const validCount = VALIDATIONS.reduce((acc, [key, validator]) => {
      const isValid = passport[key] && validator(passport[key]);
      return acc + (isValid ? 1 : 0);
    }, 0);
    return acc + (validCount === REQUIRED.length ? 1 : 0);
  }, 0);
}

console.log(solution(inputs));
