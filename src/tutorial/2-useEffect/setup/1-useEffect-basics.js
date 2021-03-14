import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter i.e dependecies
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('useEffect called');
    if (value >= 2) {
      document.title = `New Title ${value}`;
    }
  }, [value])
  return <>
    <h2>{value}</h2>
    <button className='btn' onClick={() => setValue(value + 1)}>
      Click Me !!!
  </button>
  </>;
};

export default UseEffectBasics;
