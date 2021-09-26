import CoinREX from "./images/CoinREX.jpg";
import ColorPalette from "./images/ColorPalette.jpg";

export const featuredWorkData = [
  {
    index: 1,
    projectName: "CoinREX - Crypto Tracker",
    description:
      "Cryptocurrency price tracker with search functionality, routing using react-router, using various build-in and custom hooks, as well as Redux for state management. ",
    link: "There goes a link to the project",
    image: CoinREX,
  },
  {
    index: 2,
    projectName: "Color Picker",
    description: "This app is an e",
    technologies: ["React", "React-router", "SCSS", "Redux"],
    link: "There goes a link to the project",
    image: ColorPalette,
  },
];

// Project utilizes CoinGecko API. It's Cryptocurrency price tracker with advanced search functionality.

export const technologiesColors = {
  React: "#61DBFB",
  "React router": "#72ECFC",
  Javascript: "F0DB4F",
  SCSS: "CC6699",
  // Tailwind: "61DBFB",
};
