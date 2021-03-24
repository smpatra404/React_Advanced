import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inputContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputContainer.current);
    console.log(divContainer.current);
  }
  useEffect(() => {
    inputContainer.current.focus();
  });
  return <>
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={inputContainer} />
        <button type="submit" className="btn">Submit</button>
      </div>
    </form>
    <div ref={divContainer}>Hello World !!!</div>
  </>;
};

export default UseRefBasics;
