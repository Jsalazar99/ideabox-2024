import { useState } from 'react';
import Ideas from './ideas';
import './App.css';
import Form from './form';
import './styles.css';
// import Card from '.cards';

export default function App() {

  const [ideas, setIdeas] = useState([])

  function addIdea(newIdea) {
    setIdeas([...ideas, newIdea]);
  };

  const deleteIdea = (id) => {
    const filteredIdeas = ideas.filter((idea) => idea.id !== id);
    setIdeas(filteredIdeas);
  };

  return (
    <main className='App'>
      <header>
        <h1>IdeaBox Project</h1>
      </header>
      {!ideas.length && <h2>No ideas yet -- add some!</h2>}
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} deleteIdea={deleteIdea} />
    </main>
  )
}

// export default App;