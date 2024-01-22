import React from 'react';
import Card from './card';

function Ideas({ ideas }){

    const ideaCards = ideas.map(idea => {
      return (
        <Card
          title={idea.title}
          description={idea.description}
          id={idea.id}
          key={idea.id}
        />
      )
    })
  
    return (
      <div className='ideas-container'>
        {ideaCards}
      </div>
    )
  }

  export default Ideas;