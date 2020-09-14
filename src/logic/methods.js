import ai from "./ai";
import checkSurroundingTiles from "./game/checkSurroundingTiles/checkSurroundingTiles";
import animations from "./animations";
import { master } from "../store/master";
import { populateTile } from "../store/actions/tiles";
import { removeFromHand } from "../store/actions/players";
import {
  updateScore,
  clearTurn,
  incrementTurn,
  setCard,
  setTile,
} from "../store/actions/game";
import renderGameOver from "../components/gameBoard/gamOver/gameOver";

const methods = {
  init() {
    animations.turn(() => {
      switch (true) {
        case master.state.game.turn === 10:
          this.gameOver();
          break;
        case master.state.game.currentPlayer === "light":
          break;
        case master.state.game.currentPlayer === "dark":
          ai.logic();
          this.validate();
          break;
      }
    });
  },
  selectCard(card) {
    setCard(card);
    this.validate();
  },
  selectTile(tile) {
    setTile(tile);
    this.validate();
  },
  validate() {
    if (master.state.game.card && master.state.game.tile) {
      populateTile({
        tile: master.state.game.tile,
        card: master.state.game.card,
      });
      removeFromHand(master.state.game.card.id);
      checkSurroundingTiles(master.state.game.tile, master.state.game.card);
      updateScore();
      animations.cb = () => {
        clearTurn();
        incrementTurn();
        this.init();
      };
      animations.animateTurn();
    }
  },
  gameOver() {
    renderGameOver();
  },
  playAgain() {},
};

export default methods;
