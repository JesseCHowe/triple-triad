const placeCenter = (hand) => {
  let decision;
  hand.map((card) => {
    if (!decision) decision = card;
    const total = card.values.top + card.values.right + card.values.bottom + card.values.left;
    const currentTotal = decision.values.top + decision.values.right + decision.values.bottom + decision.values.left;
    if (total > currentTotal) decision = card;
  });
  return {
    tile: "B2",
    card: decision,
  };
};

export default placeCenter;
