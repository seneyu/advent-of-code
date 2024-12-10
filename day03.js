// day-03 mull it over

const input = await Deno.readTextFile('./input/input03.txt');

// console.log(input);

// use regex to find all matches 'mul(num, num)'
// use matchAll to find the matches
// iterate the matches, compute and add to sum
function mullItOver(input) {
  const regex = /mul\((\d+),(\d+)\)/g;
  // matchAll returns an iterator
  const matches = input.matchAll(regex);

  let sum = 0;

  for (let match of matches) {
    const x = parseInt(match[1]);
    const y = parseInt(match[2]);
    sum += x * y;
  }

  return sum;
}

console.log(mullItOver(input));
