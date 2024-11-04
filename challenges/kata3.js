//Title: Fruit string calculator
//Link: https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/javascript

function calculate(string) {
  let array = string.split(" ");
  let values = [];
  let operator;
  for (let i = 0; i < array.length; i++) {
    if (array[i] * 1) {
      values.push(array[i] * 1);
    } else if (array[i] === "loses") {
      operator = "loses";
    } else if (array[i] === "gains") {
      operator = "gains";
    }
  }
  if (operator === "loses") {
    return values[0] - values[1];
  } else {
    return values[0] + values[1];
  }
}
