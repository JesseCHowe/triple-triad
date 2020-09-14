import { master } from "../../store/master";

const defensivCorner = (hand) => {
  const tiles = master.state.tiles;
  const openCorner =
    !tiles[0].card || !tiles[2].card || !tiles[6].card || !tiles[8].card;
  if (!openCorner) return null;

  const bestCards = {
    topRight: {
      tile: "A3",
      value: 0,
      card: null,
    },
    topLeft: {
      tile: "A1",
      value: 0,
      card: null,
    },
    bottomRight: {
      tile: "C3",
      value: 0,
      card: null,
    },
    bottomLeft: {
      tile: "C1",
      value: 0,
      card: null,
    },
  };

  hand.map((card) => {
    const A3 = card.values.top + card.values.right;
    const A1 = card.values.top + card.values.left;
    const C3 = card.values.bottom + card.values.right;
    const C1 = card.values.bottom + card.values.left;
    if (C1 > bestCards.topRight.value) {
      bestCards.topRight.value = C1;
      bestCards.topRight.card = card;
    }
    if (C3 > bestCards.topLeft.value) {
      bestCards.topLeft.value = C3;
      bestCards.topLeft.card = card;
    }
    if (A1 > bestCards.bottomRight.value) {
      bestCards.bottomRight.value = A1;
      bestCards.bottomRight.card = card;
    }
    if (A3 > bestCards.bottomLeft.value) {
      bestCards.bottomLeft.value = A3;
      bestCards.bottomLeft.card = card;
    }
  });
  return bestCards;
};

export default defensivCorner;
