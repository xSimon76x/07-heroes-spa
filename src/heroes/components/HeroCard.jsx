import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = (
    {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    }
) => {
  
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (


    <div className="col animate__animated animate__fadeIn">
      <div className="card" style={{"width": "18rem", "marginBottom": "2rem"}}>
        <img 
          src={heroImageUrl} 
          className="card-img" 
          alt={superhero} 
          />
        <div className="card-body">
          <h5 className="card-title">
            <b>{superhero}</b>
          </h5>
          <p>
            {
              alter_ego
            }
          </p>

          {
            ( alter_ego !== characters ) && (<p> { characters } </p>)
          }

          <p className='card-text'>
            <small>
              {
                first_appearance
              }
            </small>
          </p>

          <Link to={`/heroe/${ id }`}>
              Mas información...
          </Link>
          
        </div>
      </div>
    </div>
  )
}
