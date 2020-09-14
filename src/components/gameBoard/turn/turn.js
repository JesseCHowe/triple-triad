import { master } from "../../../store/master";

const renderTurn = (body) => {
  const game_turn = body.append("g").attr("class", "game_turn");
  game_turn
    .append("text")
    .attr("x", 950)
    .attr("y", 150)
    .style("text-anchor", "middle")
    .attr("dy", ".35em")
    .attr("font-size", "3rem")
    .style("fill", "#fff")
    .text(null);
  const player_turn = body.append("g").attr("class", "player_turn");
  player_turn
    .append("text")
    .attr("x", 950)
    .attr("y", 50)
    .style("text-anchor", "middle")
    .attr("dy", ".35em")
    .attr("font-size", "3rem")
    .style("fill", "#fff")
    .text(null);
};

export default renderTurn;
