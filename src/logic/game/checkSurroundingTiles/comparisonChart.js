export const comparisonChart = {
  A1: [
    {
      opposingTile: "A2",
      opposingSides: ["right", "left"],
    },
    {
      opposingTile: "B1",
      opposingSides: ["bottom", "top"],
    },
  ],
  A2: [
    {
      opposingTile: "A1",
      opposingSides: ["left", "right"],
    },
    {
      opposingTile: "A3",
      opposingSides: ["right", "left"],
    },
    {
      opposingTile: "B2",
      opposingSides: ["bottom", "top"],
    },
  ],
  A3: [
    {
      opposingTile: "A2",
      opposingSides: ["left", "right"],
    },
    {
      opposingTile: "B3",
      opposingSides: ["bottom", "top"],
    },
  ],
  B1: [
    {
      opposingTile: "A1",
      opposingSides: ["top", "bottom"],
    },
    {
      opposingTile: "B2",
      opposingSides: ["right", "left"],
    },
    {
      opposingTile: "C1",
      opposingSides: ["bottom", "top"],
    },
  ],
  B2: [
    {
      opposingTile: "A2",
      opposingSides: ["top", "bottom"],
    },
    {
      opposingTile: "B1",
      opposingSides: ["left", "right"],
    },
    {
      opposingTile: "B3",
      opposingSides: ["right", "left"],
    },
    {
      opposingTile: "C2",
      opposingSides: ["bottom", "top"],
    },
  ],
  B3: [
    {
      opposingTile: "A3",
      opposingSides: ["top", "bottom"],
    },
    {
      opposingTile: "B2",
      opposingSides: ["left", "right"],
    },
    {
      opposingTile: "C3",
      opposingSides: ["bottom", "top"],
    },
  ],
  C1: [
    {
      opposingTile: "B1",
      opposingSides: ["top", "bottom"],
    },
    {
      opposingTile: "C2",
      opposingSides: ["right", "left"],
    },
  ],
  C2: [
    {
      opposingTile: "B2",
      opposingSides: ["top", "bottom"],
    },
    {
      opposingTile: "C1",
      opposingSides: ["left", "right"],
    },
    {
      opposingTile: "C3",
      opposingSides: ["right", "left"],
    },
  ],
  C3: [
    {
      opposingTile: "B3",
      opposingSides: ["top", "bottom"],
    },
    {
      opposingTile: "C2",
      opposingSides: ["left", "right"],
    },
  ],
};