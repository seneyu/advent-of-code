// day 06 guard gallivant

const input = await Deno.readTextFile('./input.txt');

let count = 0;
let currRow, currCol;

const directionVectors = {
  UP: [-1, 0],
  DOWN: [1, 0],
  RIGHT: [0, 1],
  LEFT: [0, -1],
};

const directionOrder = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
let currDirection = 'UP';

function guardGallivant(input) {
  // convert data to 2D array
  const grid = input.split('\n').map((line) => line.split(''));

  let startFound = false;
  // locate '^' and move it across the map
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '^') {
        currRow = row;
        currCol = col;

        grid[row][col] = 'X';
        count = 1;
        startFound = true;
        break;
      }
    }
    if (startFound) break;
  }

  return movePointer(grid, currRow, currCol);
}

// logic to move pointer
// check if the next coordinatet for pointer is '.'
// move pointer forward and convert previous coordinate into 'X'
// when collide with '#', turn right and continue
// return count when finally reaches a border
function movePointer(grid, currRow, currCol) {
  // base case: return count when out of bounds
  if (
    currRow < 0 ||
    currRow >= grid.length ||
    currCol < 0 ||
    currCol >= grid[0].length
  ) {
    return count;
  }

  // calculate next posittion based on current direction
  const nextRow = currRow + directionVectors[currDirection][0];
  const nextCol = currCol + directionVectors[currDirection][1];

  // check if next position would be out of bounds
  if (
    nextRow < 0 ||
    nextRow >= grid.length ||
    nextCol < 0 ||
    nextCol >= grid[0].length
  ) {
    return count;
  }

  // turn right if hit '#'
  if (grid[nextRow][nextCol] === '#') {
    const currentIndex = directionOrder.indexOf(currDirection);
    currDirection = directionOrder[(currentIndex + 1) % 4];
    return movePointer(grid, currRow, currCol);
  }

  // move forward if it is a new position
  if (grid[nextRow][nextCol] === '.') {
    grid[nextRow][nextCol] = 'X';
    count += 1;
  }

  return movePointer(grid, nextRow, nextCol);
}

console.log(guardGallivant(input));
