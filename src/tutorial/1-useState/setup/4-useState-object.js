import React, { useState } from 'react';

const UseStateObject = () => {
  const personObj = { name: "Subham", age: 24, message: "Random Message" };
  const [person, setPerson] = useState(personObj);

  return (<>
    <h4>{person.name}</h4>
    <h4>{person.age}</h4>
    <h4>{person.message}</h4>
    <button className='btn' onClick={() => setPerson({ ...person, message: "Hello World!!!" })}>
      Click ME
    </button>
  </>);
};

export default UseStateObject;
