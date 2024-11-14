import React from "react";
import './student.css';

function Student({ data }) {
    // console.log(data);
    
    return (
        <div className="icard">
         
            
            {/* {JSON.stringify(data)} */}
            {/* Uncomment the table if needed to display the data in table form */}
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>{data.college}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{data.pic}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>Branch</td>
                        <td>{data.branch}</td>
                    </tr>
                    <tr>
                        <td>Roll Number</td>
                        <td>{data.roll_number}</td>
                    </tr>
                    <tr>
                        <td>Section</td>
                        <td>{data.section}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Student;
