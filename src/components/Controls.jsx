import React from "react";


const Controls = () => {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="controls">
      <button className="reset-button" onClick={handleReset}>
        Reset Canvas
      </button>
    </div>
  );
};

export default Controls;
