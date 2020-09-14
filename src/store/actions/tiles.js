import { master } from "../master";

function populateTile(target) {
  master.setState({
    ...master.state,
    tiles: master.state.tiles.map((tile) => {
      if (tile.id === target.tile) {
        return {
          ...tile,
          card: {
            id: target.card.id,
            owner: target.card.owner,
          },
        };
      } else {
        return tile;
      }
    }),
  });
}

export { populateTile };
