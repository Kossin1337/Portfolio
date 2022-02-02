export const RenderAlert = ({ status, setStatus, errors }) => {
  const resetStatus = () => {
    console.log("Reseting status");
    setStatus("");
  };

  if (status === "success") {
    errors = [];
  }

  return (
    <div className="alert-box">
      <div className="alert-info">
        <span className={`alert-text ${status}`}>{status}</span>
        <i className="fas fa-times" onClick={resetStatus}></i>
      </div>
      <div className="error-messages">
        {errors.map((errorMsg) => {
          return <span className="error-msg">{errorMsg}</span>;
        })}
      </div>
    </div>
  );
};
