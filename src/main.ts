import { mergeArrays } from './merge';

function main() {
  const a = [1, 2, 3, 4, 5];
  const b = [5, 3, 2, 1, 1];
  const c = [1, 2, 4, 6, 7, 8, 13];

  console.log("Input arrays:");
  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);

  const out = mergeArrays(a, b, c);
  console.log("Merged output:", out);
}

main();
