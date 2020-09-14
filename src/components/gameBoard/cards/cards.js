import "./cards.scss";
import methods from "../.././../logic/methods";
import { master } from "../../../store/master";

const card_text = [
  {
    position: "top",
    x: 35,
    y: 65,
  },
  {
    position: "left",
    x: 5,
    y: 125,
  },
  {
    position: "right",
    x: 60,
    y: 125,
  },
  {
    position: "bottom",
    x: 35,
    y: 180,
  },
];

const renderCards = (o, body, position) => {
  const cards = body
    .append("g")
    .attr("data-player", o.name)
    .selectAll("g")
    .data(o.cards)
    .enter()
    .append("g")
    .attr("class", "card card_container")
    .attr("data-card", (d) => d.id)
    .attr(
      "transform",
      (d, i) => `translate(${position}, ${500 + 200 * (i - 1)})`
    );
  cards
    .append("rect")
    .attr("class", "card")
    .style("fill", "#fff")
    .style("stroke", "#000")
    .style("stroke-width", 1);
  cards
    .append("svg:image")
    .attr("class", "card")
    .attr("xlink:href", (d) => {
      const img = require(`../../../assets/cards/${d.creature}.jpg`);
      return img.default;
    });
  cards
    .append("rect")
    .attr("class", "card")
    .style("fill", "none")
    .style("stroke", "#000")
    .style("stroke-width", 2);
  card_text.map((txt) => {
    cards
      .append("text")
      .attr("x", txt.x)
      .attr("y", txt.y)
      .attr("class", "card-values")
      .text((d) =>
        d.values[txt.position] === 10 ? "A" : d.values[txt.position]
      )
      .style("fill", (d) => {
        if (o.human) {
          return d.captured ? "var(--opponent-color)" : "var(--player-color)";
        } else {
          return d.captured ? "var(--player-color)" : "var(--opponent-color)";
        }
      });
  });

  if (o.human) {
    cards
      .on("mouseover", function (d, i) {
        var w = window.innerWidth;
        if (w > 700) {
          d3.select(this)
            .transition()
            .duration("250")
            .attr("transform", `translate(150, ${500 + 200 * (i - 1)})`);
        }
      })
      .on("mouseout", function (d, i) {
        var w = window.innerWidth;
        if (w > 700) {
          d3.select(this)
            .transition()
            .duration("250")
            .attr("transform", `translate(100, ${500 + 200 * (i - 1)})`);
        }
      })
      .on("click", (d) => {
        const yourTurn = master.state.game.currentPlayer === "light";
        const selectionMade = master.state.game.card && master.state.game.tile;
        if (yourTurn && !selectionMade) methods.selectCard(d);
      });
  }
};

export default renderCards;
