import { master } from "../../store/master";

const lowestCostPlay = (bestCards) => {
  const tiles = master.state.tiles;
  let decision;
  if (!bestCards) return null;
  Object.keys(bestCards).map((option) => {
    const currentTile = tiles.filter(
      (tile) => tile.id === bestCards[option].tile
    )[0];
    if (!currentTile.card) {
      if (!decision) decision = bestCards[option];
      if (bestCards[option].value < decision.value)
        decision = bestCards[option];
    }
  });
  return {
    tile: decision.tile,
    card: decision.card,
  };
};

export default lowestCostPlay;
