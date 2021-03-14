import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => setSize(window.innerWidth))
    // cleanup funtion to remove unnecesarry eventlistners
    return () => {
      window.removeEventListener('resize', () => setSize(window.innerWidth));
    }
  }, [])
  return <>
    <h1>Window Size :_</h1>
    <h1>{size}</h1>
  </>;
};

export default UseEffectCleanup;
