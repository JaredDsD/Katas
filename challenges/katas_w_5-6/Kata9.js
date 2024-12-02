//Name: Training JS #18: Methods of String object--concat() split() and its good friend join()
//Link: https://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map((word) => word.split("").join(separator))
    .join(" ");
}
