// day-01 historian-hysteria

const input = await Deno.readTextFile('./input/input01.txt');

// ------------------ part 1 ------------------

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

  // console.log(dataInput[0]);
  // console.log(dataInput[1]);

  // calculatte distance of each pair and return sum
  let sum = 0;

  for (let i = 0; i < dataInput[0].length; i++) {
    sum += Math.abs(dataInput[0][i] - dataInput[1][i]);
  }

  return sum;
}

console.log(processData(input));
// console.log(Deno.version);

// ------------------ part 2 ------------------

// convert the columns into two arrays
// create an object and store first array ele as keys
// iterate second array and if matches with key, add number of times appear as values
// iterate the object and calculate the sum

let sum = 0;
let obj = {};

function historianHysteria_part2(input) {
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

  // assign number of appearance to respective ele in obj
  for (let ele1 of dataInput[0]) {
    obj[ele1] = 0;
    for (let ele2 of dataInput[1]) {
      if (ele1 === ele2) {
        obj[ele1] += 1;
      }
    }
  }

  // find ele in obj with value greater than 1
  // get the sum of ele multiply by number of occurence
  for (let key in obj) {
    if (obj[key] !== 0) {
      sum += Number(key) * obj[key];
    }
  }

  return sum;
}

console.log(historianHysteria_part2(input));
