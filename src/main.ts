


import { mergeArrays } from './merge';

function main() {

  const a = [1,2,3,4,5]
  const b = [5,3,2,1,1]
  const c = [1,2,4,6,7,8,13]

  const out = mergeArrays(a, b, c);
  console.log(out)
}

main();
