//Name: Sum of integers in string
//Link: https://www.codewars.com/kata/598f76a44f613e0e0b000026

function sumOfIntegersInString(s) {
  const numbers = s.match(/\d+/g);

  if (!numbers) return 0;

  return numbers.map(Number).reduce((sum, num) => sum + num, 0);
}
