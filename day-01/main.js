// day-01 historian-hysteria

const input = await Deno.readTextFile('./input.txt');

function processData(input) {
  // convert input data into two arrays
  const dataInput = input.split('\n').reduce(
    (acc, currLine) => {
      const array = currLine.trim().split(/\s+/);
      acc[0].push(Number(array[0]));
      acc[1].push(Number(array[1]));
      return acc;
    },
    [[], []]
  );

  // reorder each array
  dataInput[0] = dataInput[0].sort((a, b) => a - b);
  dataInput[1] = dataInput[1].sort((a, b) => a - b);

  console.log(dataInput[0]);
  console.log(dataInput[1]);

  // calculatte distance of each pair and return sum
  let sum = 0;

  for (let i = 0; i < dataInput[0].length; i++) {
    sum += Math.abs(dataInput[0][i] - dataInput[1][i]);
  }

  return sum;
}

console.log(processData(input)); // 166427
// console.log(Deno.version);
