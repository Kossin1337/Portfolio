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
            <button className="hero-btn">See my projects...</button>
          </Link>
          <div className="main-icons">
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            <i class="fas fa-file-pdf"></i>
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
