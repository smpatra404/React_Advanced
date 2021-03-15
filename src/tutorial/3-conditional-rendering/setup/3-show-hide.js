import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [isShow, setShow] = useState(false);
  return (<>
    <button className="btn" onClick={() => setShow(!isShow)}>
      show/hide
    </button>
    {isShow && <Item />}
  </>);
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, [])
  return (<div style={{ marginTop: '10px' }}>
    <h2>Window Size : {size} px</h2>
  </ div>);
}

export default ShowHide;
