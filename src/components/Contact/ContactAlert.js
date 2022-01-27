export const RenderAlert = ({ status, setStatus }) => {
  console.log(`Render Alert STATUS: ${status}`);
  return (
    <div className="alert-box">
      <span className={`alert-text ${status}`}>Message was send.</span>
      <i className="fas fa-times" onClick={setStatus("")}></i>
    </div>
  );
};
