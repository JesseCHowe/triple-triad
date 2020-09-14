import { master } from "../store/master";

const animations = {
  cb: null,
  animateTurn() {
    const selectedTile = d3.select(
        `rect[data-tile~=${master.state.game.tile}]`
      ),
      tileX = selectedTile.attr("x"),
      tileY = selectedTile.attr("y"),
      selectedCard = document.querySelector(
        `g[data-card~=${master.state.game.card.id}]`
      );
    master.state.game.currentPlayer === "light"
      ? this.moveCard(selectedCard, tileX, tileY)
      : this.shiftCard(selectedCard, tileX, tileY);
  },
  shiftCard() {
    TweenLite.to(cardSelection2, 1, {
      x: "-=50px",
      onComplete: this.moveCard,
    });
  },
  moveCard(card, tileX, tileY) {
    TweenLite.to(card, 1, {
      x: tileX,
      y: tileY,
      onComplete: this.capture.bind(this),
    });
  },
  updateScore() {
    const player_score = d3.select(".player_score");
    const ai_score = d3.select(".ai_score");
    player_score.select("text").text(master.state.game.score.light);
    ai_score.select("text").text(master.state.game.score.dark);
    this.cb();
  },
  turn(cb) {
    const t = d3.transition().duration(650);
    const lightProfile = d3.select(".lightProfile");
    const darkProfile = d3.select(".darkProfile");

    lightProfile.style(
      "fill",
      master.state.game.currentPlayer === "light"
        ? "var(--player-color)"
        : "#fff"
    );
    darkProfile.style(
      "fill",
      master.state.game.currentPlayer === "dark"
        ? "var(--opponent-color)"
        : "#fff"
    );

    const player_turn = d3.select(".player_turn"),
      game_turn = d3.select(".game_turn");
    player_turn
      .select("text")
      .text(
        master.state.game.turn === 10
          ? null
          : `${master.state[master.state.game.currentPlayer].name}'s Turn`
      );
    game_turn
      .select("text")
      .transition(t)
      .text(
        master.state.game.turn === 10
          ? "Game Over"
          : `ROUND: ${master.state.game.turn}`
      )
      .end(cb());
  },
  capture() {
    const t = d3.transition().duration(650);
    d3.selectAll(".card")
      .selectAll("text")
      .transition(t)
      .style("fill", (d) => {
        if (d.owner === "light") {
          const currentCard = master.state.light.cards.filter(
            (card) => card.id === d.id
          )[0];
          return currentCard.captured
            ? "var(--opponent-color)"
            : "var(--player-color)";
        }
        if (d.owner === "dark") {
          const currentCard = master.state.dark.cards.filter(
            (card) => card.id === d.id
          )[0];
          return currentCard.captured
            ? "var(--player-color)"
            : "var(--opponent-color)";
        }
      })
      .end(this.updateScore());
  },
  shiftCard(card, tileX, tileY) {
    TweenLite.to(card, 1, {
      x: "-=50px",
      onComplete: () => this.moveCard(card, tileX, tileY),
    });
  },
};

export default animations;
