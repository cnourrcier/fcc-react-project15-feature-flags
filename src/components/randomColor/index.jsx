import React, { useEffect, useState } from 'react';
import './styles.css';

export default function RandomColor() {

  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function generateRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomNumber(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = generateRandomNumber(256);
    const g = generateRandomNumber(256);
    const b = generateRandomNumber(256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor])

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: color
    }}>
      <button onClick={() => setTypeOfColor('hex')} className='random-color-button'>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === 'hex'
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor}
      >
        Generate Random Color
      </button>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        fontSize: '40px',
        marginTop: '50px'
      }}>
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}
