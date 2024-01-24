import React from 'react';
import Card from './card';
import './ideas.css';

const Ideas = ({ ideas, deleteIdea }){

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