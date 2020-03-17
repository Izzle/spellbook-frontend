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
      .then(this.setSpellsInSpellBook)  // <-// OR just a function that sets state originally. compare later?
      .catch(this.context.setError);
      // highlight those spells / add to array of spellIdsInDeck
  }

  setSpellsInSpellBook = ( spellsInSpellBook ) => {
    this.setState({ spellsInSpellBook });
  }

  matchSpellsById = ( spellsInSpellBook ) => {

  //   // return matchedSpells
  //   // compare spellsInSpellBook to context.spells
  //   // const matchedSpells = this.context.spells.filter(spell => spell.id === spellsInSpellBook.id);

  //   // TEMP
  //   spellsInSpellBook = [1, 2, 3];
  //   const matchedSpells = [];
  //   for (const spellbookSpell of spellsInSpellBook) {
  //     const result = this.context.spells.filter(contextSpell => contextSpell.id !== spellbookSpell.id);
  //     matchedSpells.push(result);
  //   }
  //   //console.log(matchedSpells);
  //  // console.log('context.spells: ', this.context.spells);
  }
  toggleHighlightedClass = (spellbookSpells) => {
  
    // console.log(spellbookSpells);

    // const selectedSpellIds = spellbookSpells.map(spell => spell.id);
    // // each DIV has an prop ID = spellId we've selected. for each one, highlight it.

    // this.context.spells.map(spell => {
    //   // if spell matches any item in the selectedSpellIds array, add a property called .selected and set it to true // it not make it false
    // })
    // console.log(`selectedSpellIds: `, selectedSpellIds);
    // // ADD TO CONTEXT A PROPERTY CALLED HIGHLIGHTED:
    // // this.context.spells[index].selected = true
    // // this.context.spells[1].highlighted = false
    // const selected = 0;
    // // TAKE WHATEVER IS IN STATE ,HIGHLIGHT IT
    // // IF SOMETHING IS CLICKED, REMOVE IT FROM STATE / ADD TO STATE


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
    //const result = this.findSpellInSpellBook(spellId);
    const result = this.state.spellsInSpellBook.filter(spell => {
      return spell.id === spellId;
    });

    return result.length > 0 ? true : false;
  }
  addSpellToState = spell => {
    // state is immutable, so we can't do a .push here. We can concat and then put it in this way though
    let newSpells = this.state.spellsInSpellBook.concat(spell);
    this.setState({
      spellsInSpellBook: newSpells
    })
  }
  removeSpellFromState = spell => {

  }
  handleSpellClick = spellId => {
   // ev.preventDefault();
    console.log(`spellId`, spellId);
    

   // every page render: run a function to highlight the spells that are in the spellbook DONE
    // is spellId in the spellsInSpellBook? (does spellId match any ids in that spellbook)
    // spells: [1, 2] spellsinSpellBook: [1, 4, 6, 8]
    // WHEN CLICKED:
    // if yes, remove spell to spellsinSpellBook (if a spell is highlighted and clicked, remove it from spellbook and unhighlight)
    // if no, add spell to spellsinSpellbook (if a spell is not selected and clicked, add it to the spellbook and highlight it)
    // should be ADD or REMOVE spell from spellbook
    
    // If a spell is selected already and clicked, we remove it from state
    // If a spell hasnt been selected and is clicked, we add it to state
    const clickedSpell = this.findSpellById(spellId);
    // this.addSpellToState(clickedSpell)
    this.isSpellSelected(spellId) ? console.log('remove from state') : this.addSpellToState(clickedSpell);
    console.log('spellsInSpellbook', this.state.spellsInSpellBook);
    // event handler changes state => page rerender => conditions on rendering change the CSS
  }

  handleSaveSubmit = () => {
    //ev.preventDefault();
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
                      const selectedValue = this.isSpellSelected(spell.id);
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
                        spellSelected={selectedValue}
                        />
                    })}
          </div>
        </div>
      </section>
    )
  }
}