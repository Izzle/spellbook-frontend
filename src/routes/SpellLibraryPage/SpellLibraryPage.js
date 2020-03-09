import React, { Component } from 'react';
import SpellLibraryContext from '../../contexts/SpellLibraryContext';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';
import SpellBook from '../../components/SpellBook/SpellBook';

export default class SpellLibraryPage extends Component {
  static contextType = SpellLibraryContext;


  render() {
    const { spellbooks = [] } = this.context;

    return (
      <section className='SpellLibraryPage'>
          <SpellLibraryOptions />
          {spellbooks.map(spellbook => {
              return <SpellBook
                key={spellbook.id}
                spellbook={spellbook} 
              />
          })}
      </section>
    )
  }
}