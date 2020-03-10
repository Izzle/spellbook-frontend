import React, { Component } from 'react';
import SpellContext from '../../contexts/SpellContext';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';
import Spell from '../../components/Spell/Spell';
import STORE from '../../store';
import './SpellLibraryPage.css';

export default class SpellLibraryPage extends Component {
  static contextType = SpellContext;
  
  componentDidMount() {
    // Use something like this when the API is working
    //   SpellApiService.getSpells()
    //    .then(this.context.setSpellBookList)
    //    .catch(this.context.setError);
    this.context.setSpells(STORE.spells);
  }

  render() {
    const { spells = [] } = this.context;

    return (
      <section className='SpellLibraryPage'>
        <div className='SpellLibraryPage__container'>
          <SpellLibraryOptions />
          <div className='SpellLibraryPage__Spells__container'>
            {spells.map((spell, idx) => {
                return <Spell
                  key={idx}
                  id={spell.id}
                  name={spell.spell_name}
                  classes={spell.spell_classes}
                  level={spell.spell_level}
                  school={spell.spell_school}
                  range={spell.spell_range}
                  castingTime={spell.cast_time}
                  spellComponents={spell.spell_components}
                  duration={spell.spell_duration}
                  description={spell.spell_description}
                  higherLevels={spell.higherLevels}
                />
            })}
          </div>
        </div>
      </section>
    )
  }
}