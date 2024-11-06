//Title: Closest to Zero
//Link: https://www.codewars.com/kata/59887207635904314100007b/javascript

function closest(numbers) {
  let closest = numbers[0];

  for (let num of numbers) {
    if (Math.abs(num) < Math.abs(closest)) {
      closest = num;
    } else if (Math.abs(num) === Math.abs(closest) && num > closest) {
      closest = num;
    }
  }

  const conflicts = numbers.filter(
    (num) => Math.abs(num) === Math.abs(closest)
  );
  return conflicts.length > 1 && conflicts.includes(-closest) ? null : closest;
}
