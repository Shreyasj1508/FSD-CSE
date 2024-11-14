import React from "react";
import Student from './Student';

function App() {
  const h1 = <h1>hello world</h1>;

  const mystyle = {
    color: 'red',
    backgroundColor: 'yellow'
  };

  return (
    <div style={{ backgroundColor: 'cyan' }}>
      {h1}
      <div style={mystyle}>
        ABES
      </div>
      <div>
        <Student 
          college="ABES Engineering College"
          name="Shreyas"
          pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' alt="Shreyas" height = "100"/>}
          branch="CSE"
          roll_number="123"
          section="B"
        />

        <Student 
          college="ABES Engineering College"
          name="Naman"
          branch="IT"
          roll_number="45"
          section="A"
        />
          
        <Student 
          college="ABES Engineering College"
          name="Donald Trump"
          branch="AI ML"
          roll_number="89"
          section="X"
        />
      </div>
    </div>
  );
}

export default App;
