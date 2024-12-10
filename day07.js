// day 07 bridge repair

const input = await Deno.readTextFile('./input/input07.txt');

function bridgeRepair(input) {
  // sort the input by dividing it into left and right parts
  input = input.split('\n').map((line) => {
    const [left, right] = line.split(': ');
    const target = parseInt(left);
    const nums = right.split(' ').map((num) => parseInt(num));
    return { target, nums };
  });

  // Try all combinations
  function findSolution(nums, target) {
    // Start with first number
    function calculate(index, currentValue) {
      // base case: check if we hit target when used all numbers
      if (index === nums.length) {
        return currentValue === target;
      }

      // try addition
      if (calculate(index + 1, currentValue + nums[index])) {
        return true;
      }
      // try multiplication
      if (calculate(index + 1, currentValue * nums[index])) {
        return true;
      }

      return false;
    }

    return calculate(1, nums[0]);
  }

  // filter valid problems and add up their targets
  return input
    .filter(({ target, nums }) => findSolution(nums, target))
    .reduce((sum, { target }) => sum + target, 0);
}

console.log(bridgeRepair(input));
