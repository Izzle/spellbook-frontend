import React, { Component } from 'react';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';
import BuildSpellBookButtons from '../../components/BuildSpellBookButtons/BuildSpellBookButtons';
import SpellContext from '../../contexts/SpellContext';
import SpellApiService from '../../services/spell-api-service';
import Spell from '../../components/Spell/Spell';
import './BuildSpellBookPage.css';

export default class BuildSpellBookPage extends Component {

  state = {
    spellsInSpellBook: []
  };
  // add spells to spellsinSpellbook when componentmounts
  // function that checks if spells are in spellsInSpellBook, if they are it adds a "highlighted" class otherwise it removes it (maybe a toggle function)
  // compare spellsInSpellBook to this.context.spells, if they match it get highlighted - if they dont they are 'unhightlighted'
  //
  // when a spell is clicked, update the state (by removing or adding the item to the spellsInSPellBook array). 
  // this will trigger a rerender
  // we want to check again if spells in context match spellsInSpellBook and hightlight/unhightlight again
  // when "SAVE" it pressed, we do a PUT request sending our spellsinSpellBook array to update this specific SpellBook
  // then after the PUT request is successful, we go back to loading the '/spellbook/:id' endpoint which will now show all spells that are in the spellbook in the DB
  // 
  // We need to get the spellsInTheSPellbookbyId to set the state initially, but afterwards to keep using the value from state (the array spellsInSPellBook)
  // however whenever the page first loads, we want to get teh data from the getAllSpellsInSpellbookById service the first time again.

  static contextType = SpellContext;

  componentDidMount() {
     // Show all spells
    SpellApiService.getAllSpells()
       .then(this.context.setSpells)
       .catch(this.context.setError);
      // Find which ones are already in the deck
    const { id } = this.props.match.params;
    SpellApiService.getAllSpellsInSpellbookById(id)
      .then(console.log)
      .catch(this.context.setError);
      // highlight those spells / add to array of spellIdsInDeck

      // THEN (outside of component did mount, probably in event handler)
      // when a spell is clicked, it will remove it from an array "spellIdsInDeck" or w/e
    
    console.log(id);
    // some service here
  }

  handleSpellClick = spellId => {
   // ev.preventDefault();
    console.log(spellId);
    // we want to get the value of the spellId when clicked
    // Also, I DONT want this to trigger on the "SpellLibrary" page...
  }

  handleSaveSubmit = ev => {
    ev.preventDefault();
    console.log('save button submit');
  }

  render() {
    const { spells = [] } = this.context;
    return (
      <section className='BuildSpellBookPage'>
        <div className='BuildSpellBookPage__contaner'>
          <SpellLibraryOptions />
          <BuildSpellBookButtons onSaveSubmit={this.handleSaveSubmit}/>
          <h2>Edit and build your deck here</h2>
          <p>What do we need to do?
            We need the buttons to SAVE DECK and a placeholder that looks like a button
            <br />
            Load all spells, for the spells that are already in a spellbook - highlight them.
            When a button is pressed/clicked update state (add/remove that spell to state), which will highlight it.
            When SAVE is pressed, make a POST request
          </p>
          <div className='BuildSpellBookPage__Spells__container'>
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
                        onSpellClick={this.handleSpellClick}
                        />
                    })}
          </div>
        </div>
      </section>
    )
  }
}