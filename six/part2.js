const { inputs } = require("./part1");

function solution(input) {
  const groups = input.map((i) => i.split(/\n/));
  return groups.reduce((result, group) => {
    const yesMap = group.reduce((acc, response) => {
      const chars = response.split("");
      return chars.reduce(
        (innerAcc, char) => ({
          ...innerAcc,
          [char]: (innerAcc[char] || 0) + 1,
        }),
        acc
      );
    }, {});
    return (
      result +
      Object.values(yesMap).filter((val) => val === group.length).length
    );
  }, 0);
}

console.log(solution(inputs));
