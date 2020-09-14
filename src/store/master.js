import { createState } from "../stateManager";
import { game } from "./reducers/game";
import { tiles } from "./reducers/tiles";
import { light } from "./reducers/light";
import { dark } from "./reducers/dark";

const initialState = {
  game: game,
  tiles: tiles,
  light: light,
  dark: dark,
  target: {
    reset: reset,
  },
  events: {},
};

let master = createState(initialState);

function reset() {
  master.setState(initialState);
}
export { master, reset };
