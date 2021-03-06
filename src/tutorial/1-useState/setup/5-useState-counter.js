import React, { useState } from 'react';

const UseStateCounter = () => {
  let [countValue, setValue] = useState(0);
  return <>
    <h2>Counter Demo :_</h2>
    <h1>{countValue}</h1>
    <div>
      <button className='btn' onClick={() => setValue(--countValue)}>Decrease</button>
      <button className='btn' onClick={() => setValue(0)}>Reset</button>
      <button className='btn' onClick={() => setValue(++countValue)}>Increase</button>
    </div>
  </>
};

export default UseStateCounter;
