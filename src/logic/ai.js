import defensiveCorner from "./ai/defensiveCorner";
import defensiveSide from "./ai/defensiveSide";
import lowestCostPlay from "./ai/lowestCostPlay";
import placeCenter from "./ai/placeCenter";
import averageTurn from "./ai/averageTurn";
import { master } from "../store/master";
import { setCard, setTile } from "../store/actions/game";

const ai = {
  logic() {
    const dark = master.state.dark,
      turn = master.state.game.turn;
    const hand = dark.cards.filter((card) => card.inHand);
    let play;
    if (turn === 1) {
      play = lowestCostPlay(defensiveCorner(hand));
    } else {
      play =
        averageTurn(hand) ||
        lowestCostPlay(defensiveCorner(hand)) ||
        lowestCostPlay(defensiveSide(hand)) ||
        placeCenter(hand);
    }
    setCard(play.card);
    setTile(play.tile);
  },
};

export default ai;
