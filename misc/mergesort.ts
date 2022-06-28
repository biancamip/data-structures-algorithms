import { test } from "./test";

function mergesort(original: number[]): number[] {
  if (original.length <= 1) return original;

  let mid = Math.floor(original.length / 2);

  let left = mergesort(original.slice(0, mid));
  let right = mergesort(original.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  let l = 0;
  let r = 0;

  let sorted: number[] = [];
  while (l < left.length && r < right.length) {
    let leftEl = left[l];
    let rightEl = right[r];

    if (leftEl <= rightEl) {
      sorted.push(leftEl);
      l++;
    } else {
      sorted.push(rightEl);
      r++;
    }
  }

  return sorted.concat(left.slice(l)).concat(right.slice(r));
}

function main() {
  test([1, 2, 3, 4, 5, 6], mergesort([6, 2, 4, 3, 5, 1]));
  test([1, 2, 4, 4, 6, 13, 29, 32], mergesort([6, 13, 4, 2, 32, 4, 29, 1]));
}

main();
