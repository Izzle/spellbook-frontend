import React from 'react';
import './Spell.css';

export default function Spell(props) {
    return (
      <div className='Spell__main'>
          <h4>{props.name}</h4>
          <p>{`Level: ${props.level} // School: ${props.school} // Range: ${props.range}`}</p>
          <p>{`Classes: ${props.classes} (FIX THIS: Currently using the class ID)`}</p>
          <p>{`Casting Time: ${props.castingTime} // Duration: ${props.duration} // Components: ${props.spellComponents}`}</p>
          <p>{`Description: ${props.description}`}</p>
          <h5>At higher levels</h5>
          <p>{`${props.higherLevels}`}</p>

          {/* key={spell.id}
                name={spell.spell_name}
                classes={spell.classes}
                level={spell.level}
                school={spell.school}
                range={spell.range}
                castingTime={spell.castingTime}
                spellComponents={spell.components}
                duration={spell.duration}
                description={spell.description}
                higherLevels={spell.higherLevels} */}
      </div>
    )
}