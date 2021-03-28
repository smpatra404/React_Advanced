import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';

// Contains default values of diff states
const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: 'I am the MODAL !!!',
}

const Index = () => {
  // for getting name from text box
  const [name, setName] = useState('');
  // reducer function
  const [state, dispatch] = useReducer(reducer, defaultState);
  // submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    // If name has some value then add it to the list
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    }
    // Else show popup with no value
    else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  // For auto closing the modal popup after some seconds
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  return (<>
    {state.isModalOpen && < Modal closeModal={closeModal} content={state.modalContent} />}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
    {state.people.map((p) => {
      return <div key={p.id} className="item">
        <h4>{p.name}</h4>
        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: p.id })}>Remove</button>
      </div>
    })}
  </>);
};

export default Index;
