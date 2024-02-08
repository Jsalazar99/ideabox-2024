import { useState } from 'react';
import './form.css';

export default function Form({ addIdea }) {
    // useState Hook 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function submitIdea(event) {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title,
      description
    }
    addIdea(newIdea);
    // clearInput(); - keeping fields populated for now
  }

  function clearInput() {
    setTitle('');
    setDescription('');
  }

  return (
    <form className='body-input'>
    <input
      className='body-input'
      type='text'
      placeholder='Title'
      name='title'
      value={title}
      onChange={event => setTitle(event.target.value)}
    />

    <input
      className='body-input'
      type='text'
      placeholder='Description'
      name='description'
      value={description}
      onChange={event => setDescription(event.target.value)}
    />

    <button className='form-styles form-btn q-btn' onClick={event => submitIdea(event)}>SUBMIT</button>
  </form>
  )
}