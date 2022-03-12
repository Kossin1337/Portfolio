import CoinREX from "./images/coinREX.png";
import ColorPicker from "./images/ColorPicker.png";

export const projectData = [
  {
    index: 1,
    featured: true,
    projectName: "CoinREX - Crypto App",
    description:
      "Cryptocurrency price tracker with search functionality, routing using react-router, cryptocurrency charts using Chart.js, Redux Toolkit for better state management and API calls. I used Coinranking and News API to provide info about different cryptocurrencies & related news",
    technologies: [
      "React",
      "API",
      "Javascript",
      "React-router",
      "SCSS",
      "Redux Toolkit",
      "Chart.js",
    ],
    liveDemo: "https://coinrex.netlify.app/",
    github: "https://github.com/Kossin1337/crypto-app",
    image: CoinREX,
  },
  {
    index: 2,
    featured: true,
    projectName: "Color Picker & Palette Generator",
    description:
      "This website is a small encyclopedia about colors. Allowing you to generate a custom color or palette. Website uses React Context API and allows you to save your favorite colors/palettes. You can explore and learn about color models by reading blog articles",
    technologies: ["React", "Javascript", "React-router", "SCSS"],
    liveDemo: "https://cooloor.netlify.app/",
    github: "https://github.com/Kossin1337/Color-picker-palette-generator",
    image: ColorPicker,
  },
];

export const technologiesColors = {
  React: "rgba(97, 219, 251, 1)", // #61DBFB
  "React-router": "rgba(114, 236, 252, 1)", // #72ECFC
  Javascript: "rgba(240, 219, 79, 1)", // #F0DB4F
  SCSS: "rgba(204, 102, 153, 1)", // #CC6699
  Redux: "rgba(118, 74, 188, 1)", // #764abc
  "Redux Toolkit": "rgba(118, 74, 188, 1)", // #764abc
  TailwindCSS: "#fff512",
  "Chart.js": "rgba(247, 115, 119, 1)", // #f77377
  API: "rgba(144, 238, 144, 1)",
};
