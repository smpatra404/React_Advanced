import React from 'react';

const ErrorExample = () => {
  let title = "Random title !!!"
  const handleClick = () => {
    title = "Clicked !!!"
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}></button>
    </React.Fragment>
  );
};

export default ErrorExample;
