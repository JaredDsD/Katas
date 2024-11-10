//Title: Is n divisible by (...)?
//Link:https://www.codewars.com/kata/558ee8415872565824000007/javascript

function isDivisible(n, ...divisors) {
  if (divisors.length === 0) return true;
  return divisors.every((divisor) => n % divisor === 0);
}
