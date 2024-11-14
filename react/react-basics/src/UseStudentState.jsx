import React, { useState } from 'react';

function UseStudentState() {
  const [count, setCount] = useState(20);

  return (
    <div style={{ color: 'red' }}>
      {count}
    </div>
  );
}
export default UseStudentState;
