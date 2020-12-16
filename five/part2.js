const { inputs, getComputedSeatData } = require("./part1");

function solution(input) {
  const seatData = getComputedSeatData(input);

  const rowGroups = seatData.reduce(
    (acc, seat) => ({
      ...acc,
      [seat.row]: [...(acc[seat.row] || []), seat],
    }),
    {}
  );

  const [rowWithSeven] = Object.values(rowGroups).filter(
    (group) => group.length === 7
  );

  const seatTotal = Array.from(Array(8).keys()).reduce((acc, v) => acc + v, 0);

  const rowSeatTotal = rowWithSeven.reduce((acc, { col }) => acc + col, 0);

  const { row } = rowWithSeven[0];
  const col = seatTotal - rowSeatTotal;

  return row * 8 + col;
}

console.log(solution(inputs));
