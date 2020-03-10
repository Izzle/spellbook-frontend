import React from 'react';

export default function Spell(props) {
    return (
      <div className='Spell__main'>
          <h4>{props.name}</h4>
          <p>{`Level: ${props.level} // School: Evocation // Range: 150 feet`}</p>
          <p>Classes: Cleric, Sorcerer, Wizard, Warlock</p>
          <p>Casting Time: 1 Action // Duration: Instantaneous // Components: V, S, M </p>
          <p>Description: boom fire</p>
          <h5>At higher levels</h5>
          <p>Description: Hits even harder</p>

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