import React, { Component } from 'react';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';
import BuildSpellBookButtons from '../../components/BuildSpellBookButtons/BuildSpellBookButtons';

export default class BuildSpellBookPage extends Component {
  render() {
    return (
      <section className='BuildSpellBookPage'>
        <div className='BuildSpellBookPage__contaner'>
          <SpellLibraryOptions />
          <BuildSpellBookButtons />
          <h2>Edit and build your deck here</h2>
          <p>What do we need to do?
            We need the buttons to SAVE DECK and a placeholder that looks like a button
            <br />
            Load all spells, for the spells that are already in a spellbook - highlight them.
            When a button is pressed/clicked update state (add/remove that spell to state), which will highlight it.
            When SAVE is pressed, make a POST request
          </p>
          <div className='BuildSpellBookPage__Spells__container'>
          
          </div>
        </div>
      </section>
    )
  }
}