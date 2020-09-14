import { master } from "../master";
import characters from "../../data/characters";

function setHand(player, deck) {
  master.setState({
    ...master.state,
    [player]: {
      ...master.state[player],
      name: characters[deck].name,
      cards: characters[deck].cards.map((card, idx) => {
        return {
          ...card,
          id: card.creature,
          captured: false,
          owner: player,
          inHand: true,
        };
      }),
    },
  });
}

function captureCard(target) {
  master.setState({
    ...master.state,
    [target.owner]: {
      ...master.state[target.owner],
      cards: master.state[target.owner].cards.map((card) => {
        if (card.id === target.id) {
          return {
            ...card,
            captured: !card.captured,
          };
        } else {
          return card;
        }
      }),
    },
  });
}

function removeFromHand(target) {
  const currentPlayer = master.state.game.currentPlayer;
  master.setState({
    ...master.state,
    [currentPlayer]: {
      ...master.state[currentPlayer],
      cards: master.state[currentPlayer].cards.map((card) => {
        if (card.id == target) {
          return {
            ...card,
            inHand: !card.inHand,
          };
        } else {
          return card;
        }
      }),
    },
  });
}

export { setHand, captureCard, removeFromHand };
