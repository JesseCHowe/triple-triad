import { comparisonChart } from "./comparisonChart";
import { master } from "../../../store/master";
import { captureCard } from "../../../store/actions/players";

const checkSurroungTiles = (tile, card) => {
  const tiles = master.state.tiles;
  comparisonChart[tile].map((opposingTile) => {
    const oTile = tiles.filter(
      (tile) => tile.id === opposingTile.opposingTile
    )[0];
    if (!oTile.card) return;
    const owner = oTile.card.owner;
    const currentPlayer = master.state.game.currentPlayer;
    const isCaptured = master.state[owner].cards.filter(
      (card) => card.id === oTile.card.id
    )[0].captured;
    const uncapturedEnemyCard = owner !== currentPlayer && !isCaptured;
    const capturedPlayerCard = owner === currentPlayer && isCaptured;
    if (!uncapturedEnemyCard && !capturedPlayerCard) return;
    const test = card.values[opposingTile.opposingSides[0]];
    const test2 = master.state[owner].cards.filter(
      (card) => card.id === oTile.card.id
    )[0].values[opposingTile.opposingSides[1]];
    if (test > test2) captureCard(oTile.card);
  });
};

export default checkSurroungTiles;
