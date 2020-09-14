import "./coinFlip.scss";
import methods from "../../../logic/methods";
import { setCurrentPlayer, incrementTurn } from "../../../store/actions/game";

const coinFlip = () => {
  let decision = null;
  const coinContainer = d3
    .select("#app")
    .append("div")
    .attr("class", "coinContainer");
  const coinFlip = coinContainer.append("div").attr("class", "coinFlip");
  const coinChoice = coinContainer.append("div").attr("class", "coinChoice");
  coinChoice
    .append("div")
    .attr("class", "heads")
    .on("click", () => flip("heads"));
  coinChoice
    .append("div")
    .attr("class", "tails")
    .on("click", () => flip("tails"));
  const coin = coinFlip
    .append("div")
    .attr("id", "coin")
    .style("display", "none");
  coin.append("div").attr("class", "side-a");
  coin.append("div").attr("class", "side-b");

  function flip(choice) {
    coinChoice.style("display", "none");
    coin.style("display", "block");
    decision = choice;
    const flipResult = Math.random();
    coin.attr("class", null);
    if (flipResult <= 0.5) {
      coin.classed("heads", true);
    } else {
      coin.classed("tails", true);
    }
    setTimeout(function () {
      const result = flipResult <= 0.5 ? "heads" : "tails";
      choice === result ? setCurrentPlayer("light") : setCurrentPlayer("dark");
      incrementTurn();
      coinContainer.remove();
      methods.init();
    }, 4000);
  }
};

export default coinFlip;
