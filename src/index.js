import "./style.scss";
import { mode } from "./store/reducers/mode";
import gameBoard from "./containers/gameBoard/gameBoard";
import characterSelection from "./containers/characterSelection/characterSelection";

const render = () => {
  d3.select("#app > *").remove();
  if (mode.state.mode === "characterSelection") characterSelection();
  if (mode.state.mode === "gameBoard") return gameBoard();
};

render();

window.addEventListener("modeUpdated", render);
