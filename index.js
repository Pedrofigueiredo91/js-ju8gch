const baskets = [11, 14, 7, 12, 9, 12];

const points = baskets.map(function (amountOfBaskets) {
  return amountOfBaskets * 2;
});

// const points = baskets.map((amountOfBaskets) => amountOfBaskets * 2);

console.log(points);
 