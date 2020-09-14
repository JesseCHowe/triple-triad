import { comparisonChart } from "../game/checkSurroundingTiles/comparisonChart";
import { master } from "../../store/master";

const averageTurn = (hand) => {
  let decision;
  const tiles = master.state.tiles;
  const playerTiles = tiles.filter((tile) => {
    if (!tile.card) return;
    const owner = tile.card.owner;
    const isCaptured = master.state[owner].cards.filter(
      (card) => card.id === tile.card.id
    )[0].captured;
    const capturedAllyCard = owner === "dark" && isCaptured;
    const uncapturedEnemyCard = owner === "light" && !isCaptured;
    if (capturedAllyCard || uncapturedEnemyCard) {
      return tile;
    }
  });
  playerTiles.map((tile) => {
    comparisonChart[tile.id].map((o) => {
      const oTile = tiles.filter((tile) => tile.id === o.opposingTile)[0];
      if (!oTile.card) {
        hand.map((card) => {
          const canWin =
            card.values[o.opposingSides[1]] >
            master.state[tile.card.owner].cards.filter(
              (card) => card.id === tile.card.id
            )[0].values[o.opposingSides[0]];
          const lowerCost =
            !decision || decision.value > card.values[o.opposingSides[1]];
          if (canWin && lowerCost) {
            decision = {
              card: card,
              tile: o.opposingTile,
              value: card.values[o.opposingSides[0]],
            };
          }
        });
      }
    });
  });
  return decision;
};

export default averageTurn;
