const memoize = (func) => {
  const results = {};

  return (...args) => {
    console.log(results);
    const argsKey = JSON.stringify(args);

    if (!results[argsKey]) results[argsKey] = func(...args);
    return results[argsKey];
  };
};

function main() {
  const sum = memoize((a, b) => {
    return a + b;
  });

  console.log(sum(1, 2, 3, 4));
  console.log(sum(1, 5, 3, 5));
  console.log(sum(1, 2));
  console.log(sum(3));
}

main();
