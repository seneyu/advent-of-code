// day-01 historian-hysteria -- part two

const input = await Deno.readTextFile('./input.txt');

// convert the columns into two arrays
// create an object and store first array ele as keys
// iterate second array and if matches with key, add number of times appear as values
// iterate the object and calculate the sum

let sum = 0;
let obj = {};

function historianHysteria(input) {
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

console.log(historianHysteria(input));
