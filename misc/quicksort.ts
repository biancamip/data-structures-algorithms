function quicksort(originalArray: number[]): number[] {
  if (originalArray.length <= 1) return originalArray;

  // array length has already been checked
  let pivot: number = originalArray.pop()!;
  let left = [];
  let right = [];

  for (const el of originalArray) {
    if (el > pivot) {
      right.push(el);
    } else {
      left.push(el);
    }
  }

  return quicksort(left).concat([pivot]).concat(quicksort(right));
}

function test(expected: number[], actual: number[]) {
  if ([...expected].join("") !== [...actual].join("")) {
    console.error(`FAIL ❌\n  exp: ${expected}, act: ${actual}`);
  } else {
    console.log(`OK ✨\n  ${actual}`);
  }
}

function main() {
  test([1, 2, 3, 4, 5, 6], quicksort([6, 2, 4, 3, 5, 1]));
  test([1, 2, 4, 4, 6, 13, 29, 32], quicksort([6, 13, 4, 2, 32, 4, 29, 1]));
}

main();
