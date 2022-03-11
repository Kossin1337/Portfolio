import { Link } from "react-router-dom";
import "./Main.scss";
import reactGif from "./gifs/react.gif";
import mainGif from "./gifs/main.gif";
import githubGif from "./gifs/github.gif";

export const Main = () => {
  return (
    <div className="main">
      <div className="hero-section">
        <h1 className="hero-title hero-text">Piotr Swobodziński | Kossin</h1>
        <h2 className="hero-sub-title hero-text">
          React.js Developer | UI/UX Design
        </h2>
        <div className="hero-links">
          <Link to="/projects">
            <button className="hero-btn">See my projects</button>
          </Link>
          <div className="main-icons">
            <a
              href="https://github.com/kossin1337"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kossin1337/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="gif-wrapper">
        <img className="main-gif gif" src={mainGif} alt="Main gif animation" />
      </div>
      <img
        className="react-gif gif"
        src={reactGif}
        alt="React Logo animation"
      />
      <img className="github-gif gif" src={githubGif} alt="Github Animation" />
    </div>
  );
};
