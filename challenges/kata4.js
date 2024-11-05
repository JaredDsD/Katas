//Title: String reverse slicing 101
//Link: https://www.codewars.com/kata/586efc2dcf7be0f217000619/javascript

function reverseSlice(s) {
  let result = [];
  for (let i = s.length; i > 0; i--) {
    result.push(s.slice(0, i).split("").reverse().join(""));
  }
  return result;
}
