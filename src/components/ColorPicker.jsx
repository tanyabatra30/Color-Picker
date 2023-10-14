import React, { useState } from "react";
import "./ColorPicker.css"; // You can style the component with a CSS file

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="color-picker">
      <div className="color-options">
        {buttonClicked && colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => {
              setButtonClicked(!buttonClicked);
              handleColorClick(color);

            }}
          ></button>
        ))}
      </div>
      <button onClick={() =>{ 
        setSelectedColor(null);
        setButtonClicked(!buttonClicked);
        }}>Pick a color</button>
    </div>
  );
};

export default ColorPicker;