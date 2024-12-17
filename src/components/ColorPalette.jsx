import React from "react";


const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6", "#FFFFFF", "#000000",
];

const ColorPalette = ({ onColorSelect }) => {
  return (
    <div className="color-palette">
      {colors.map((color) => (
        <div
          key={color}
          className="color-swatch"
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPalette;
