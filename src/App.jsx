import React, { useState } from "react";
import PixelGrid from "./components/PixelGrid";
import ColorPalette from "./components/ColorPalette";
import Controls from "./components/Controls";
import "./App.css";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("#000000"); // Default black
  const [gridSize] = useState(16); // 16x16 grid

  return (
    <div className="app">
      <h1>Pixel Painter</h1>
      <ColorPalette onColorSelect={setSelectedColor} />
      <PixelGrid gridSize={gridSize} selectedColor={selectedColor} />
      <Controls />
    </div>
  );
};

export default App;
