import CoinREX from "./images/CoinREX.png";
import ColorPalette from "./images/ColorPalette.jpg";

export const featuredWorkData = [
  {
    index: 1,
    projectName: "CoinREX - Crypto Tracker",
    description:
      "Cryptocurrency price tracker with search functionality, routing using react-router, using various build-in and custom hooks, as well as Redux for state management. ",
    technologies: [
      "React",
      "Javascript",
      "React-router",
      "SCSS",
      "Redux",
      "Chart.js",
    ],
    liveDemo: "There goes a link to the project",
    github: "https://github.com/Kossin1337/API-Crypto-tracker",
    image: CoinREX,
  },
  {
    index: 2,
    projectName: "Color Picker & Palette Generator",
    description:
      "A small encyclopedia about colors. Allowing you to generate a custom color Palette, convert any web color model (RGB/A, HEX, HSL) into another. Explore color models by reading blog articles",
    technologies: ["React", "Javascript", "React-router", "SCSS", "Redux"],
    liveDemo: "There goes a link to the project",
    github: "https://github.com/Kossin1337/Color-picker-palette-generator",
    image: ColorPalette,
  },
];

// Project utilizes CoinGecko API. It's Cryptocurrency price tracker with advanced search functionality.

// This website is a small encyclopedia about colors. Allowing you to generate a custom color Palette, convert any web color model (RGB/A, HEX, HSL) into another.

export const technologiesColors = {
  React: "rgba(97, 219, 251, 1)", // #61DBFB
  "React-router": "rgba(114, 236, 252, 1)", // #72ECFC
  Javascript: "rgba(240, 219, 79, 1)", // #F0DB4F
  SCSS: "rgba(204, 102, 153, 1)", // #CC6699
  Redux: "rgba(118, 74, 188, 1)", // "#764abc"
  Tailwind: "61DBFB",
};
