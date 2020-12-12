const { inputs } = require("./part1");

function solution(values) {
  let result = 0;
  for (let i = 0; i < values.length; i++) {
    if (result) {
      break;
    }
    const valueA = values[i];
    for (let j = i + 1; j < values.length; j++) {
      const valueB = values[j];
      for (let k = j + 1; k < values.length; k++) {
        const valueC = values[k];
        if (valueA + valueB + valueC === 2020) {
          result = valueA * valueB * valueC;
        }
      }
    }
  }
  return result;
}

console.log(solution(inputs));
