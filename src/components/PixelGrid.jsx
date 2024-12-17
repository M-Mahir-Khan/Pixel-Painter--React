import React, { useState } from "react";


const PixelGrid = ({ gridSize, selectedColor }) => {
  const [pixels, setPixels] = useState(Array(gridSize * gridSize).fill("#FFFFFF"));

  const handlePixelClick = (index) => {
    const newPixels = [...pixels];
    newPixels[index] = selectedColor;
    setPixels(newPixels);
  };

  return (
    <div
      className="pixel-grid"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
      }}
    >
      {pixels.map((color, index) => (
        <div
          key={index}
          className="pixel"
          style={{ backgroundColor: color }}
          onClick={() => handlePixelClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default PixelGrid;
