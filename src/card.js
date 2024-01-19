function Card({ title, description, id }){
    return (
      <div className='card'>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>🗑</button>
      </div>
    )
  }
  