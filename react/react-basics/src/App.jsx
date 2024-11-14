import React from "react";
import Student from './Student';
import UseStudentState from "./UseStudentState";

function App() {
  const h1 = <h1>hello world</h1>;

  const mystyle = {
    color: 'red',
    backgroundColor: 'yellow'
  };

  
  const studentData = [
    {
      name: "Shreyas",
      branch: "CSE",
      college: "ABES",
      roll_number: "123",
      section: "B",
    },
    {
      name: "Naman",
      branch: "IT",
      college: "ABESIT",
      roll_number: "456",
      section: "C"
    },
    {
      name: "Aman",
      branch: "Mechanical",
      college: "ABESBS",
      roll_number: "789",
      section: "F"
    }


  ];

  return (
    <div>

     
      <h2>HELLOOOOOOO</h2>
     <div>
      <UseStudentState/>
     </div>
    </div>
//     <div style={{ backgroundColor: 'cyan' }}>
//       {h1}
//       <div style={mystyle}>
//         ABES Engineering College
//       </div>

//       <div style={{ display: 'flex' }}>
//         {/* Render each student by mapping over the studentData array */}
//         {studentData.map(
//           (ele) => {
//          return <Student data={ele} />
//           }
// )}

    //   </div>
    // </div>
 
//}
)
}
export default App;
