import React, { useState } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('#ffffff'); // Initial color is white

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
      <div
        style={{
          marginTop: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor,
        }}
      ></div>
    </div>
  );
}

export default ColorPicker;
