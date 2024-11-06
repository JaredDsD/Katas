//Title: ASCII letters from Number
//Link: https://www.codewars.com/kata/589ebcb9926baae92e000001/javascript

function convert(number) {
  let result = "";

  for (let i = 0; i < number.length; i += 2) {
    let asciiCode = parseInt(number.slice(i, i + 2));
    result += String.fromCharCode(asciiCode);
  }

  return result;
}
