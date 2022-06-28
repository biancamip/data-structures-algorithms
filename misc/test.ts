export function test(expected: number[], actual: number[]) {
  if ([...expected].join("") !== [...actual].join("")) {
    console.error(`FAIL ❌\n  exp: ${expected}, act: ${actual}`);
  } else {
    console.log(`OK ✨\n  ${actual}`);
  }
}
