import tiles_data from "../../../data/tiles";
import methods from "../../../logic/methods";
import { master } from "../../../store/master";

const renderTiles = (o) => {
  const tiles = o.append("g").attr("class", "tiles");
  tiles
    .selectAll("g")
    .data(tiles_data)
    .enter()
    .append("rect")
    .attr("class", "tile")
    .attr("data-tile", (d) => d.id)
    .attr("x", (d) => 500 + 300 * d.col)
    .attr("y", (d) => 300 + 400 * d.row)
    .on("click", (d) => {
      const yourTurn = master.state.game.currentPlayer === "light";
      const selectionMade = master.state.game.card && master.state.game.tile;
      yourTurn && !selectionMade
        ? methods.selectTile(d.id)
        : console.log("not your turn");
    });
};

export default renderTiles;
