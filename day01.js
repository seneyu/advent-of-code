// day-01 historian-hysteria

// ------------------ part 1 ------------------

export function historianHysteria(input) {
  if (!input || input.trim() === '') return 0;

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

// ------------------ part 2 ------------------

// convert the columns into two arrays
// create an object and store first array ele as keys
// iterate second array and if matches with key, add number of times appear as values
// iterate the object and calculate the sum

export function similarityScore(input) {
  if (!input || input.trim() === '') return 0;

  let sum = 0;

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

  // for each num in left array, count its occurrences in right array
  const rightCounts = {};
  for (let num of dataInput[1]) {
    rightCounts[num] = (rightCounts[num] || 0) + 1;
  }

  // for each number in left array, add to sum (number * its occurrences in right)
  for (let leftNum of dataInput[0]) {
    sum += leftNum * (rightCounts[leftNum] || 0);
  }

  return sum;
}

if (import.meta.main) {
  try {
    const input = await Deno.readTextFile('./input/input01.txt');
    console.log('Part 1:', historianHysteria(input));
    console.log('Part 2:', similarityScore(input));
  } catch (error) {
    console.error('Error reading input file:', error);
  }
}
