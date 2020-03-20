import React, { Component } from 'react';
import SpellContext from '../../contexts/SpellContext';
import SpellApiService from '../../services/spell-api-service';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';
import Spell from '../../components/Spell/Spell';
import './SpellLibraryPage.css';
 
export default class SpellLibraryPage extends Component {

  static contextType = SpellContext;
  
  componentDidMount() {
      SpellApiService.getAllSpells()
       .then(this.context.setSpells)
       .catch(this.context.setError);
  }

  render() {
    const { spells = [] } = this.context;
    
    return (
      <section className='SpellLibraryPage'>
        <div className='SpellLibraryPage__container'>
          <h2>View All Spells</h2>
          {/* <SpellLibraryOptions /> */}
          <div className='SpellLibraryPage__Spells__container'>
            {spells.map((spell, idx) => {
                return <Spell
                  key={idx}
                  id={spell.id}
                  name={spell.spell_name}
                  classes={spell.spell_classes /* This doesnt exist like this anymore, I had to make a table to JOIN tables called class_spells */}
                  level={spell.spell_level}
                  school={spell.spell_school}
                  range={spell.spell_range}
                  castingTime={spell.cast_time}
                  spellComponents={spell.spell_components}
                  duration={spell.spell_duration}
                  description={spell.spell_description}
                  higherLevels={spell.higher_levels}
                />
            })}
          </div>
        </div>
      </section>
    )
  }
}