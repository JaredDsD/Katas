//Title: Bouncing Ball
//Link:

function bouncingBall(initialHeight, bouncingProportion) {
  let bounces = 0;
  let height = initialHeight;

  while (height > 1) {
    height *= bouncingProportion;
    bounces++;
  }
  return bounces;
}

//Alternative solution:

function bouncingBall(initialHeight, bouncingProportion) {
  if (initialHeight <= 1) {
    return 0;
  }
  return (
    1 + bouncingBall(initialHeight * bouncingProportion, bouncingProportion)
  );
}
