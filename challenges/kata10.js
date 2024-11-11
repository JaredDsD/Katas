//Title: Sort the climbing grades
//Link: https://www.codewars.com/kata/58a08e622e7fb654a300000e/javascript

function sortGrades(lst) {
  const defaultDifficulty = {
    VB: 0,
    V0: 1,
    "V0+": 2,
    V1: 3,
    V2: 4,
    V3: 5,
    V4: 6,
    V5: 7,
    V6: 8,
    V7: 9,
    V8: 10,
    V9: 11,
    V10: 12,
    V11: 13,
    V12: 14,
    V13: 15,
    V14: 16,
    V15: 17,
    V16: 18,
    V17: 19,
  };
  return lst.sort((a, b) => {
    const rankA = defaultDifficulty[a] ? defaultDifficulty[a] : null;
    const rankB = defaultDifficulty[b] ? defaultDifficulty[b] : null;
    return rankA - rankB;
  });
}
