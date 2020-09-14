import "./characterSelection.scss";
import { setMode } from "../../store/reducers/mode";
import { setHand } from "../../store/actions/players";
import myImg from "../../assets/characters/kuja-profile.png";
const characters = [
  "terra",
  "cloud",
  "squall",
  "zidane",
  "kefka",
  "sephiroth",
  "ultimecia",
  "kuja",
];

const characterSelection = () => {
  const state = {
    current: "light",
    light: null,
    dark: null,
  };
  const body = d3
    .select("#app")
    .append("div")
    .attr("class", "select-screen-container")
    .append("div")
    .attr("class", "select-screen");
  const chooseTarget = body.append("div").attr("class", "chooseTarget");
  const player = chooseTarget
    .append("div")
    .text("Player")
    .style("color", state.current === "light" ? "var(--player-color)" : "#fff")
    .on("click", () => changeCurrent("light"));
  const opponent = chooseTarget
    .append("div")
    .text("Computer")
    .style("color", state.current === "dark" ? "var(--opponent-color)" : "#fff")
    .on("click", () => changeCurrent("dark"));
  const charBody = body.append("div").attr("class", "body");
  const charCards = charBody
    .selectAll("div")
    .data(characters)
    .enter()
    .append("div");
  const charCardBody = charCards.attr("class", "character-contain");

  const charCardImage = charCardBody
    .append("div")
    .attr("class", "character")
    .style("background-image", (d) => {
      const image = require(`../../assets/characters/${d}-profile.png`);
      return `url(${image.default})`;
    })

    .style("background-color", (d) => {
      if (d === state.light) return "var(--player-color)";
      if (d === state.dark) return "var(--opponent-color)";
      return "white";
    })
    .on("click", (d) => {
      if (d !== state.light && d !== state.dark) selectCharacter(d);
    });

  charCardBody
    .append("span")
    .attr("class", "character-profile-name")
    .text((d) => d);
  const startBtn = body
    .append("button")
    .attr("class", "startGameBtn")
    .text("START")
    .attr("disabled", true)
    .on("click", () => {
      setHand("light", state.light);
      setHand("dark", state.dark);
      setMode("gameBoard");
    });

  function selectCharacter(character) {
    state[state.current] = character;
    charCardImage.style("background-color", (d) => {
      if (d === state.light) return "var(--player-color)";
      if (d === state.dark) return "var(--opponent-color)";
      return "white";
    });
    if (state.light && state.dark) startBtn.attr("disabled", null);
  }

  function changeCurrent(option) {
    state.current = option;
    player.style(
      "color",
      state.current === "light" ? "var(--player-color)" : "#fff"
    );
    opponent.style(
      "color",
      state.current === "dark" ? "var(--opponent-color)" : "#fff"
    );
  }
};

export default characterSelection;
