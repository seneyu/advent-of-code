// day-05 print queue

const input = await Deno.readTextFile('./input/input05.txt');

function printQueue(input) {
  // declare an array to store each update that returns truthy
  // declare variable sum
  let update = [];
  let sum = 0;

  // first half of data - use Map to store key value pairs, values will be stored as array
  // second half of data - iterate each line and use previously defined Map object to check if ele exists in key
  const [firstHalf, secondHalf] = input.split('\n\n');

  const firstHalfData = new Map();
  firstHalf.split('\n').forEach((line) => {
    const [key, value] = line.split('|').map(Number);
    if (firstHalfData.has(key)) {
      firstHalfData.get(key).push(value);
    } else {
      firstHalfData.set(key, [value]);
    }
  });

  //   console.log(firstHalfData);
  //   console.log(firstHalfData.get(96));

  const secondHalfData = secondHalf
    .split('\n')
    .map((line) => line.split(',').map(Number));

  // check each array in section half of data
  secondHalfData.forEach((arr) => {
    let isTruthy = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (
        !firstHalfData.has(arr[i]) ||
        !firstHalfData.get(arr[i]).includes(arr[i + 1])
      ) {
        isTruthy = false;
        break;
      }
    }

    if (isTruthy) {
      update.push(arr);
    }
  });

  // calculate sum of middle indices of arrays that returned truthy
  update.forEach((arr) => {
    const midIndex = Math.floor(arr.length / 2);
    sum += arr[midIndex];
  });

  return sum;
}

console.log(printQueue(input));
