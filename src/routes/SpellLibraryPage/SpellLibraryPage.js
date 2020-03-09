import React, { Component } from 'react';
import SpellLibraryContext from '../../contexts/SpellLibraryContext';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';
import SpellBook from '../../components/SpellBook/SpellBook';

export default class SpellLibraryPage extends Component {
  static contextType = SpellLibraryContext;
  
  componentDidMount() {
    // Use something like this when the API is working
    //   SpellApiService.getSpells()
    //    .then(this.context.setSpellBookList)
    //    .catch(this.context.setError);

  }

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