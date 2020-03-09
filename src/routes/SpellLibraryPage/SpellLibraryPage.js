import React, { Component } from 'react';
import SpellContext from '../../contexts/SpellContext';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';
import SpellBook from '../../components/SpellBook/SpellBook';
import STORE from '../../store';

export default class SpellLibraryPage extends Component {
  static contextType = SpellContext;
  
  componentDidMount() {
    // Use something like this when the API is working
    //   SpellApiService.getSpells()
    //    .then(this.context.setSpellBookList)
    //    .catch(this.context.setError);
    this.context.setSpellBookList(STORE.spellbooks);
  }

  render() {
    const { spellbooks = [] } = this.context;

    return (
      <section className='SpellLibraryPage'>
          <SpellLibraryOptions />
          {spellbooks.map(spellbook => {
              return <SpellBook
                key={spellbook.id}
                name={spellbook.spellbook_name}
                spells={spellbook.spellsInBook}
              />
          })}
      </section>
    )
  }
}