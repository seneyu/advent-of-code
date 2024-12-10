// day-04 ceres search

const input = await Deno.readTextFile('./input/input04.txt');

let count = 0;

// check all directions for 'XMAS', if true increment count by 1
function ceresSearch(input) {
  // convert input into a 2D array
  let array = input.split('\n').map((str) => str.split(''));
  // iterate each sub-array and locate 'X'
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      // check all directions and accumulate count
      if (array[i][j] === 'X') {
        checkVertical(array, i, j);
        checkHorizontal(array, i, j);
        checkDiagonal(array, i, j);
      }
    }
  }

  return count;
}

function checkVertical(array, x, y) {
  // check up
  if (x - 3 >= 0) {
    if (
      array[x - 1][y] === 'M' &&
      array[x - 2][y] === 'A' &&
      array[x - 3][y] === 'S'
    ) {
      count += 1;
    }
  }
  // check down
  if (x + 3 < array.length) {
    if (
      array[x + 1][y] === 'M' &&
      array[x + 2][y] === 'A' &&
      array[x + 3][y] === 'S'
    ) {
      count += 1;
    }
  }
}

function checkHorizontal(array, x, y) {
  // check left
  if (y - 3 >= 0) {
    if (
      array[x][y - 1] === 'M' &&
      array[x][y - 2] === 'A' &&
      array[x][y - 3] === 'S'
    ) {
      count += 1;
    }
  }
  // check right
  if (y + 3 < array[0].length) {
    if (
      array[x][y + 1] === 'M' &&
      array[x][y + 2] === 'A' &&
      array[x][y + 3] === 'S'
    ) {
      count += 1;
    }
  }
}

function checkDiagonal(array, x, y) {
  // check up-right
  if (x - 3 >= 0 && y + 3 < array[0].length) {
    if (
      array[x - 1][y + 1] === 'M' &&
      array[x - 2][y + 2] === 'A' &&
      array[x - 3][y + 3] === 'S'
    ) {
      count += 1;
    }
  }

  // check up-left
  if (x - 3 >= 0 && y - 3 >= 0) {
    if (
      array[x - 1][y - 1] === 'M' &&
      array[x - 2][y - 2] === 'A' &&
      array[x - 3][y - 3] === 'S'
    ) {
      count += 1;
    }
  }

  // check down-right
  if (x + 3 < array.length && y + 3 < array[0].length) {
    if (
      array[x + 1][y + 1] === 'M' &&
      array[x + 2][y + 2] === 'A' &&
      array[x + 3][y + 3] === 'S'
    ) {
      count += 1;
    }
  }

  // check down-left
  if (x + 3 < array.length && y - 3 >= 0) {
    if (
      array[x + 1][y - 1] === 'M' &&
      array[x + 2][y - 2] === 'A' &&
      array[x + 3][y - 3] === 'S'
    ) {
      count += 1;
    }
  }
}

console.log(ceresSearch(input));
