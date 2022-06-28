import { test } from "./test";

function quicksort(original: number[]): number[] {
  if (original.length <= 1) return original;

  // array length has already been checked
  let pivot: number = original.pop()!;
  let left = [];
  let right = [];

  for (const el of original) {
    if (el > pivot) {
      right.push(el);
    } else {
      left.push(el);
    }
  }

  return quicksort(left).concat([pivot]).concat(quicksort(right));
}

function main() {
  test([1, 2, 3, 4, 5, 6], quicksort([6, 2, 4, 3, 5, 1]));
  test([1, 2, 4, 4, 6, 13, 29, 32], quicksort([6, 13, 4, 2, 32, 4, 29, 1]));
}

// main();
