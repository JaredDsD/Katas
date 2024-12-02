//Name: Vowel Count
//Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  const vowels = str.match(/[aeiou]/g);
  return vowels ? vowels.length : 0;
}
