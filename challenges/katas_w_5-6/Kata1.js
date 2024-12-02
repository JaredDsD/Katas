//Name: Number of People in the Bus
//Link: https://www.codewars.com/kata/5648b12ce68d9daa6b000099/javascript

var number = function (busStops) {
  return busStops.reduce((people, [on, off]) => people + on - off, 0);
};
