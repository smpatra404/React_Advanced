import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Hello World !!!');
  const handleClick = () => {
    if(text === 'Hello World !!!') {
       setText('New Heading !!!!!')
    } else {
       setText('Hello World !!!')
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
