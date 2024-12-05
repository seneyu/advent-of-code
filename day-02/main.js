// day-02 red-nosed

const input = await Deno.readTextFile('./input.txt');

function processSafeReports(input) {
  // group data by lines and convert into an array
  const dataInput = input
    .split('\n')
    .map((line) => line.split(' ').map(Number));

  let safeCount = 0;
  let isIncreasing = false;

  // iterate each sequence in dataInput
  // determine if it is increasing or decreasing
  dataInput.forEach((sequence) => {
    if (sequence[0] < sequence[1]) {
      isIncreasing = true;
    } else {
      isIncreasing = false;
    }

    let validSequence = true;

    // analyze each sequence
    // any two adjacent levels differ by at least one and at most three
    for (let i = 1; i < sequence.length; i++) {
      const diff = sequence[i] - sequence[i - 1];

      if (isIncreasing && (diff < 1 || diff > 3)) {
        validSequence = false;
        break;
      }

      if (!isIncreasing && (diff > -1 || diff < -3)) {
        validSequence = false;
        break;
      }
    }

    if (validSequence) safeCount += 1;
  });

  return safeCount;
}

console.log(processSafeReports(input));
