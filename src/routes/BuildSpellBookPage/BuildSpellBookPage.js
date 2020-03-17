import React, { Component } from 'react';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';
import BuildSpellBookButtons from '../../components/BuildSpellBookButtons/BuildSpellBookButtons';
import SpellContext from '../../contexts/SpellContext';
import SpellApiService from '../../services/spell-api-service';
import Spell from '../../components/Spell/Spell';
import './BuildSpellBookPage.css';

// GET contextSpells
// GET mySpellsinSpellBook <- for speicific id
// compare them to see which contextSpells match mySPellIsSpellbook


export default class BuildSpellBookPage extends Component {

  state = {
    spellsInSpellBook: [],
  };
  // add spells to spellsinSpellbook when componentmounts
  // function that checks if spells are in spellsInSpellBook, if they are it adds a "highlighted" class otherwise it removes it (maybe a toggle function)
  // compare spellsInSpellBook to this.context.spells, if they match it get highlighted - if they dont they are 'unselected'
  //
  // when a spell is clicked, update the state (by removing or adding the item to the spellsInSPellBook array). 
  // this will trigger a rerender
  // we want to check again if spells in context match spellsInSpellBook and select/unselect again
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
      .then(this.setSpellsInSpellBook)  
      .catch(this.context.setError);
  }

  componentDidUpdate() {
    // is this needed?
  }

  setSpellsInSpellBook = ( spellsInSpellBook ) => {
    this.setState({ spellsInSpellBook });
  }

  findSpellById = (id) => {
    // Finds any spell in this.context.spells (all spells we have) when given a spell id
    return this.context.spells.find(spell => {
      return spell.id === id;
    });
  }

  isSpellSelected = (spellId) => { 
    // This function will take in the spellId and will determine if that spell
    // is in the state version of the spellbook. If it is it will return true, if not it returns false.

    const result = this.state.spellsInSpellBook.filter(spell => {
      return spell.id === spellId;
    });
    return result.length > 0 ? true : false;
  }

  addSpellToState = spell => {
    this.setState({
      spellsInSpellBook: [...this.state.spellsInSpellBook, spell]
    });
  }

  removeSpellFromState = id => {
    let newSpellsArray = [...this.state.spellsInSpellBook]; // make a separate copy of the array
    newSpellsArray = newSpellsArray.filter(spell => spell.id !== id);// removes the specificed element at the index
    this.setState({
      spellsInSpellBook: [...newSpellsArray]
    });
  }

  handleSpellClick = (spellId, spellIdx) => { // dont need spellIdx
    // If a spell is selected already and clicked, we remove it from state
    // If a spell hasnt been selected and is clicked, we add it to state
    const clickedSpell = this.findSpellById(spellId);
    console.log(this.isSpellSelected(spellId));
    this.isSpellSelected(spellId) ? this.removeSpellFromState(spellId) : this.addSpellToState(clickedSpell);
    // event handler changes state => page rerender => conditions on rendering change the CSS
  }

  handleSaveSubmit = () => {
    //ev.preventDefault();
    console.log('save button submit');
  }

  render() {
    const { spells = [] } = this.context;
    //console.log('spellsInSpellbook', this.state.spellsInSpellBook);
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
                      const selectedValue = this.isSpellSelected(spell.id);
                        return <Spell
                        key={idx}
                        idx={idx} // index of the element in the array
                        id={spell.id} // ID of the spell
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
                        spellSelected={selectedValue}
                        />
                    })}
          </div>
        </div>
      </section>
    )
  }
}