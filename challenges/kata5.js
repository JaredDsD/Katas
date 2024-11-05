//Name: Alphabet symmetry
//Link: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/javascript

function solve(words) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const solution = [];
  let accumm = 0;

  for (let arrInx = 0; arrInx < words.length; arrInx++) {
    words[arrInx]
      .toLowerCase()
      .split("")
      .map((letter, inx) => {
        if (letter === alphabet[inx]) {
          accumm += 1;
        }
      });
    solution.push(accumm);
    accumm = 0;
  }
  return solution;
}
