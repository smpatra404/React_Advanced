import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {

  const [name, setName] = useState('default');
  const { id } = useParams();
  useEffect(() => {
    const person = data.find((p) => p.id === parseInt(id));
    setName(person.name);
  }, [])
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </div>
  );
};

export default Person;
