import { master } from "../../../store/master";

const renderScore = (body) => {
  const lightScore = master.state.game.score.light,
    darkScore = master.state.game.score.dark;
  const player_score = body
    .append("g")
    .attr("class", "player score score player_score");
  player_score
    .append("text")
    .attr("x", 250)
    .attr("y", 1650)
    .attr("dy", ".35em")
    .attr("fill", "var(--player-color)")
    .text(lightScore);

  const ai_score = body.append("g").attr("class", "enemy score ai_score");
  ai_score
    .append("text")
    .attr("x", 1650)
    .attr("y", 1650)
    .attr("dy", ".35em")
    .attr("fill", "var(--opponent-color)")
    .text(darkScore);
};

export default renderScore;
