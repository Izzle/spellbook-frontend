import React, { Component } from 'react';
import SpellContext from '../../contexts/SpellContext';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';
import Spell from '../../components/Spell/Spell';
import STORE from '../../store';

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
          <SpellLibraryOptions />
          {spells.map((spell, idx) => {
              return <Spell
                key={idx}
                id={spell.id}
                name={spell.spell_name}
                classes={spell.classes}
                level={spell.level}
                school={spell.school}
                range={spell.range}
                castingTime={spell.castingTime}
                spellComponents={spell.components}
                duration={spell.duration}
                description={spell.description}
                higherLevels={spell.higherLevels}
              />
          })}
      </section>
    )
  }
}