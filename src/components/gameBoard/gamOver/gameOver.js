import "./gameOver.scss";
import { master, reset } from "../../../store/master";
import { setMode } from "../../../store/reducers/mode";

const renderGameOver = () => {
  const app = d3.select("#app");
  const overScreenContainer = app
    .append("div")
    .attr("class", "game-over-container");
  const overScreen = overScreenContainer
    .append("div")
    .attr("class", "game-over");
  overScreen.append("h1").text(() => {
    if (master.state.game.score.light > master.state.game.score.dark)
      return "YOU WIN!";
    if (master.state.game.score.dark > master.state.game.score.light)
      return "YOU LOST...";
    if (master.state.game.score.light === master.state.game.score.dark)
      return "IT'S A TIE";
  });
  overScreen
    .append("button")
    .text("NEW GAME")
    .on("click", () => {
      reset();
      setMode("characterSelection");
      overScreenContainer.remove();
    });
};

export default renderGameOver;
