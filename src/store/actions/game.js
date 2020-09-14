import { master } from "../master";

function setCurrentPlayer(target) {
  master.setState({
    ...master.state,
    game: {
      ...master.state.game,
      currentPlayer: target,
    },
  });
}

function clearTurn() {
  master.setState({
    ...master.state,
    game: {
      ...master.state.game,
      currentPlayer:
        master.state.game.currentPlayer === "light" ? "dark" : "light",
      card: null,
      tile: null,
    },
  });
}

function incrementTurn() {
  master.setState({
    ...master.state,
    game: {
      ...master.state.game,
      turn: ++master.state.game.turn,
    },
  });
}

function setCard(target) {
  master.setState({
    ...master.state,
    game: {
      ...master.state.game,
      card: target,
    },
  });
}

function setTile(target) {
  master.setState({
    ...master.state,
    game: {
      ...master.state.game,
      tile: target,
    },
  });
}

function updateScore() {
  const unCaptured = (total, o) => (o.captured ? total - 1 : total);
  const captured = (total, o) => (o.captured ? total : total - 1);
  master.setState({
    ...master.state,
    game: {
      ...master.state.game,
      score: {
        light:
          master.state.light.cards.reduce(unCaptured, 5) +
          master.state.dark.cards.reduce(captured, 5),
        dark:
          master.state.dark.cards.reduce(unCaptured, 5) +
          master.state.light.cards.reduce(captured, 5),
      },
    },
  });
}

export {
  setCurrentPlayer,
  incrementTurn,
  setCard,
  setTile,
  updateScore,
  clearTurn,
};
