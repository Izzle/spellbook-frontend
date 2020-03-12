import React from 'react';
import './Spell.css';

export default function Spell(props) {
    return (
      <div className='Spell__main'>
          <h4>{props.name}</h4>
          <p>{`Level: ${props.level === 0 ? 'Cantrip': props.level} // School: ${props.school} // Range: ${props.range}`}</p>
          <p>{`Classes: ${props.classes} (FIX THIS: Currently using the class ID)`}</p>
          <p>{`Casting Time: ${props.castingTime} // Duration: ${props.duration} // Components: ${props.spellComponents}`}</p>
          <p>{`Description: ${props.description}`}</p>
          
          {props.higherLevels.length > 0 && 
            <>
              <h5>At higher levels</h5> 
              <p>{props.higherLevels}</p>
            </>
          }
      </div>
    )
}