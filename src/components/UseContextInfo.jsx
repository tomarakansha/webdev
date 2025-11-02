import React, { useState } from 'react';
import A from './A';

export const Context = React.createContext();

const UseContextInfo = () => {
  const [data, setData] = useState({
    roll_no: 1,
    name: "kiet",
    marks: [34, 56, 78, 9, 67, 7],
  });

  return (
    <div style={{ height: "80vh" }}>
      <h2>Use Context Example</h2>
      <Context.Provider value={data}>
        <A />
      </Context.Provider>
    </div>
  );
};

export default UseContextInfo;

