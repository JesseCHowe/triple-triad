import { createState } from "../../stateManager";

let modeUpdated = new Event("modeUpdated");

const initialState = {
  mode: "characterSelection",
  events: {
    setMode: "setMode",
  },
  target: {},
};

let mode = createState(initialState, modeUpdated);

function setMode(target) {
  mode.setState({
    ...mode.state,
    mode: target,
  });
}

export { mode, setMode };
