import React, { useState } from 'react';
import Imagemanu from './imagemanu';

function UseStudentState() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('pink'); // State to manage background color

  function doIncreament1() {
    setCount(prevCount => prevCount + 1); // Increment the count
    setBgColor(bgColor === 'orange' ? 'lightgreen' : 'orange'); // Toggle background color
  }

  function doDecrement() {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // Decrement the count (ensure it doesn't go below 0)
  }

  // Determine the opposite button color based on the background color
  const buttonColor = bgColor === 'orange' ? 'lightgreen' : 'orange';

  return (
    <div 
      style={{
        display: 'flex', 
        justifyContent: 'center',    
        alignItems: 'center',        
        height: '100vh'              
      }}
    >
      {/* <div 
        style={{
          border: '2px solid blue', 
          padding: '10px', 
          height: '450px', 
          width: '350px', 
          textAlign: 'center',  
          fontSize: '45px',
          backgroundColor: bgColor, // Dynamically change background color
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-evenly', // Align items evenly inside
          alignItems: 'center' 
        }}
      >
        <div style={{ fontSize: '30px' }}>Counter: {count}</div>
        <button 
          style={{
            padding: '10px 20px', 
            fontSize: '20px', 
            backgroundColor: buttonColor, // Opposite of the box's background color
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer'
          }}
          onClick={doIncreament1} 
        >
          Increment Counter
        </button>
        <button 
          style={{
            padding: '10px 20px', 
            fontSize: '20px', 
            backgroundColor: 'red', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer'
          }}
          onClick={doDecrement} 
        >
          Decrement Counter
        </button>
      </div> */}
      <Imagemanu/>
    </div>
  );
}

export default UseStudentState;
