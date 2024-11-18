import React, { useState } from 'react';

function UseStudentState() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('pink'); // State to manage background color

  function doIncreament1() {
    setCount(prevCount => prevCount + 1); // Increment the count
  }

  function doIncreament2() {
    setBgColor(bgColor === 'orange' ? 'lightgreen' : 'orange'); // Toggle background color
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
      <div 
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
          onClick={() => { doIncreament1(); doIncreament2(); }} 
        >
          Increment Counter
        </button>
      </div>
    </div>
  );
}

export default UseStudentState;
