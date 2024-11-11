//Title:
//Link:

function sortCards(array) {
  const defaultCardOrder = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ];
  const cardRankMap = {};
  defaultCardOrder.forEach((card, index) => {
    cardRankMap[card] = index;
  });
  return array.sort((a, b) => {
    const rankA = cardRankMap[a] !== undefined ? cardRankMap[a] : Infinity;
    const rankB = cardRankMap[b] !== undefined ? cardRankMap[b] : Infinity;
    return rankA - rankB;
  });
}
