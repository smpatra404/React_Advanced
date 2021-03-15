import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('k')
  const [error, setError] = useState(true);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    // ( || ) :_ If text is empty then return "Lorem Ipsum" else return the text value
    // ( && ) :_ If text has some value then return "Lorem Ipsum" else return text
    <>
      <h2>
        {text || "Lorem Ipsum"}
        {" - "}
        {text && "New Head"}
      </h2>
      <button className="btn" onClick={() => setError(!error)}>
        Toggle Error
      </button>
      {!error && <h2> Hello World !!!</h2>}
      {error ? (<h1>No error</h1>) : (<h1>Error !!!</h1>)}
    </>
  );
};

export default ShortCircuit;
