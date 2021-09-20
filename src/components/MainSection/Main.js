import "./Main.css";
import reactGif from "./gifs/react.gif";
import mainGif from "./gifs/main.gif";
import githubGif from "./gifs/github.gif";

export const Main = () => {
  return (
    <div className="main">
      <div className="hero-section">
        <h1 className="hero-title hero-text">
          Making your ideas
          <br />
          come true
        </h1>
        <h2 className="hero-sub-title hero-text">
          Piotr Swobodziński | Kossin
        </h2>
        <h3 className="hero-note hero-text">
          React.js Developer | UI/UX Design
        </h3>
      </div>

      <div className="gif-wrapper">
        <img className="main-gif gif" src={mainGif} alt="Main gif animation" />
      </div>
      <img
        className="react-gif gif"
        src={reactGif}
        alt="React Logo animation"
      />
      {/* <img className="html-gif gif" src={htmlGif} alt="HTML Logo Animation" /> */}
      <img className="github-gif gif" src={githubGif} alt="Github Animation" />
    </div>
  );
};
