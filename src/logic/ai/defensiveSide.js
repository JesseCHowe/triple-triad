import { master } from "../../store/master";

const defensiveSide = (hand) => {
  const tiles = master.state.tiles;
  const openSides =
    !tiles[1].card || !tiles[3].card || !tiles[5].card || !tiles[7].card;
  if (!openSides) return null;
  const bestCards = {
    top: {
      tile: "A2",
      value: 0,
      card: null,
    },
    left: {
      tile: "B1",
      value: 0,
      card: null,
    },
    right: {
      tile: "B3",
      value: 0,
      card: null,
    },
    bottom: {
      tile: "C2",
      value: 0,
      card: null,
    },
  };
  hand.map((card) => {
    const top = card.values.top;
    const left = card.values.left;
    const right = card.values.right;
    const bottom = card.values.bottom;
    if (bottom > bestCards.top.value) {
      bestCards.top.value = bottom;
      bestCards.top.card = card;
    }
    if (right > bestCards.left.value) {
      bestCards.left.value = right;
      bestCards.left.card = card;
    }
    if (left > bestCards.right.value) {
      bestCards.right.value = left;
      bestCards.right.card = card;
    }
    if (top > bestCards.bottom.value) {
      bestCards.bottom.value = top;
      bestCards.bottom.card = card;
    }
  });
  return bestCards;
};

export default defensiveSide;
