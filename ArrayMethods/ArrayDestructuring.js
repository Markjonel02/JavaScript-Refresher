const sample = [1, 2, 3, 4, 5];

const [first, second, ...remaining] = sample;

const result = sample
  .filter((s) => s % 2 === 0) // keep odd numbers
  .map((s) => s); // return the number itself

console.log(result); // [1, 3, 5]
