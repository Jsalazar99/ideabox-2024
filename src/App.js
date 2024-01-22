import { useState } from 'react';
import Ideas from './ideas';
// import Card from '.cards';

function App() {
 
  const [ideas,setIdeas] = useState([])

 return (
    <main className='App'>
      <h1>IdeaBox Project</h1>
      {!ideas.length && <h2>No ideas yet -- add some!</h2> }
      <Ideas ideas={ideas} />
    </main>
 )
}

export default App;