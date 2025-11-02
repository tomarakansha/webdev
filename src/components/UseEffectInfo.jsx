// A.jsx
import React, { useContext } from 'react';
import { Context } from './UseContextInfo';

const A = () => {
  const data = useContext(Context);

  return (
    <div>
      <h3>Data from Context:</h3>
      <p>Roll No: {data.roll_no}</p>
      <p>Name: {data.name}</p>
      <p>Marks: {data.marks.join(', ')}</p>
    </div>
  );
};

export default A;
