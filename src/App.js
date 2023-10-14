import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker.jsx"
import  "./components/ColorPicker.css";

function App() {
  const colors = [
  "#FF5733",   // Bright Red
  "#33FF57",   // Bright Green
  "#3398FF",   // Bright Blue
  "#FF33D6",   // Bright Pink
  "#47A13B",   // Bright Olive Green
  "#EC7717",   // Bright Orange
  "#7A4EF5",   // Bright Purple
  "#A45635",   // Bright Brown
  "#FFD700",   // Bright Yellow
  "#10A98A",   // Bright Turquoise
];

  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;