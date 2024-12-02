//Name: Is it a palindrome?
//Link: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(str) {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  return cleanedStr === cleanedStr.split("").reverse().join("");
}
