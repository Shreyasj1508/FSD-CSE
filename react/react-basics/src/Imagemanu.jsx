import React, { useState } from 'react';
import dog from './assets/dog.png';

const Imagemanu = () => {
  // Image size state
  const [imageHeight, setImageHeight] = useState(200);
  const [imageWidth, setImageWidth] = useState(200);
  const [imageRotation, setImageRotation] = useState(0); 
  const [bgColor, setBgColor] = useState('lightblue'); 
  const [outerBoxColor, setOuterBoxColor] = useState('lightgray');

  
  const increaseHeight = () => {
    setImageHeight(imageHeight + 20); 
  };

  
  const reduceHeight = () => {
    if (imageHeight > 20) {
      setImageHeight(imageHeight - 20);
    }
  };

  
  const enhanceWidth = () => {
    setImageWidth(imageWidth + 20); 
  };

  
  const decreaseWidth = () => {
    if (imageWidth > 20) {
      setImageWidth(imageWidth - 20);
    }
  };

 
  const rotateImage = () => {
    setImageRotation(imageRotation + 90); 
  };

 
  const changeBgColor = () => {
    const colors = ['lightblue', 'lightcoral', 'lightgreen', 'lightyellow', 'lightpink', 'lightseagreen', 'lightgoldenrodyellow', 'lightskyblue', 'lightsteelblue', 'lavender'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor); 
  };

 
  const changeOuterBoxColor = () => {
    const colors = ['lightgray', 'lightpink', 'lightyellow', 'lightgreen', 'lightblue', 'lavender', 'mintcream', 'mistyrose', 'peachpuff', 'powderblue'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setOuterBoxColor(randomColor); 
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column', 
      }}
    >
    
      <div
        style={{
          border: '2px solid blue',
          padding: '40px', // Increased padding for the outer box
          backgroundColor: outerBoxColor, // Dynamically change background color of the outer box
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: '15px',
          width: '500px', // Larger width for the outer box
          height: '600px', // Larger height for the outer box
        }}
      >
       
        <div
          style={{
            border: '2px solid #000',
            padding: '20px',
            backgroundColor: bgColor, // Dynamically change background color of the inner box
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column', // Stack elements vertically
            justifyContent: 'space-evenly', // Distribute space evenly
            alignItems: 'center',
            width: '300px', // Smaller width for the inner box
            height: '350px', // Smaller height for the inner box
            marginLeft: '70px',
          }}
        >
         
          <img
            src={dog}
            height={imageHeight}
            width={imageWidth}
            alt="A cute dog"
            style={{
              marginTop: '20px',
              borderRadius: '10px',
              display: 'block',
              margin: '0 auto',
              transform: `rotate(${imageRotation}deg)`, // Apply rotation
            }}
          />
        
          <div>
            <button onClick={increaseHeight} style={buttonStyle}>Increase Height</button>
            <button onClick={reduceHeight} style={buttonStyle}>Reduce Height</button>
            <button onClick={enhanceWidth} style={buttonStyle}>Increase Width</button>
            <button onClick={decreaseWidth} style={buttonStyle}>Reduce Width</button>
            <button onClick={rotateImage} style={buttonStyle}>Rotate Image</button>
            <button onClick={changeBgColor} style={buttonStyle}>Change Inner Box Color</button>
          </div>
        </div>

       
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center', // Center align the button horizontally
          }}
        >
          <button onClick={changeOuterBoxColor} style={buttonStyle}>Change Outer Box Color</button>
        </div>
      </div>
    </div>
  );
};

// Button styling
const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '14px',
  backgroundColor: '#4CAF50', // Green background for buttons
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Imagemanu;
