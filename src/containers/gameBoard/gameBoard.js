import "./gameBoard.scss";
import renderTiles from "../../components/gameBoard/tiles/tiles";
import renderCards from "../../components/gameBoard/cards/cards";
import renderScore from "../../components/gameBoard/score/score";
import renderTurn from "../../components/gameBoard/turn/turn";
import coinFlip from "../../components/gameBoard/coinFlip/coinFlip";
import { master } from "../../store/master";

const gameBoard = () => {
  const light = master.state.light;
  const dark = master.state.dark;
  const turn = master.state.game.turn;

  const game_container = d3
    .select("#app")
    .append("div")
    .attr("class", "game_container")
    .append("div")
    .attr("id", "game");
  const game_body = game_container
    .append("svg")
    .attr("viewBox", "0 0 1900 1760")
    .attr("preserveAspectRatio", "xMinYMin slice")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("overflow", "hidden")
    .append("svg")
    .attr("width", 1900)
    .attr("height", 1760);

  const lightProfileImg = require(`../../assets/characters/${light.name.toLowerCase()}-profile.png`);
  game_body
    .append("rect")
    .attr("class", "lightProfile")
    .attr("x", 325)
    .attr("y", 10)
    .attr("width", 250)
    .attr("height", 250)
    .style("fill", "#fff");
  game_body
    .append("svg:image")
    .attr("x", 325)
    .attr("y", 10)
    .attr("width", 250)
    .attr("height", 250)
    .attr("xlink:href", lightProfileImg.default)
    .style("fill", "#fff");
  game_body
    .append("rect")
    .attr("x", 325)
    .attr("y", 10)
    .attr("width", 250)
    .attr("height", 250)
    .style("fill", "none")
    .style("stroke", "silver")
    .style("stroke-width", 5);

  const darkProfileImg = require(`../../assets/characters/${dark.name.toLowerCase()}-profile.png`);
  game_body
    .append("rect")
    .attr("class", "darkProfile")
    .attr("x", 1325)
    .attr("y", 10)
    .attr("width", 250)
    .attr("height", 250)
    .style("fill", "#fff");
  game_body
    .append("svg:image")
    .attr("x", 1325)
    .attr("y", 10)
    .attr("width", 250)
    .attr("height", 250)
    .attr("xlink:href", darkProfileImg.default)
    .style("fill", "#fff");
  game_body
    .append("rect")
    .attr("x", 1325)
    .attr("y", 10)
    .attr("width", 250)
    .attr("height", 250)
    .style("fill", "none")
    .style("stroke", "silver")
    .style("stroke-width", 5);

  renderTiles(game_body);
  renderCards(light, game_body, 100);
  renderCards(dark, game_body, 1500);
  renderScore(game_body);
  renderTurn(game_body);
  if (turn === 0) coinFlip();
};

export default gameBoard;
