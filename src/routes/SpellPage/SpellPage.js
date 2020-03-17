import React, { Component } from 'react';
import Spell from '../../components/Spell/Spell';
import SpellContext from '../../contexts/SpellContext';
import SpellApiService from '../../services/spell-api-service';
// THIS CODE IS NOT YET IMPLEMENTED
// It will be used for a planned feature in the future

export default class SpellPage extends Component {
  static defaultProps = {
      match: { params: {} }
  };

  static contextType = SpellContext;

  componentDidMount() {
    const { id } = this.props.match.params;
    this.context.clearError();

    SpellApiService.getSpellById(id) 
      .then(this.context.setSpells) // probably need to make a .setSpell method to save to singleSpell: [] so it doesnt cause issues with other pages
      .catch(this.context.setError);
  }

  render() {
    const spell = this.context.spells; // there is only one value because of the API method we used
    
    return (
      <div className='SpellPage'>
        <h2>An page for individual spell!</h2>
        <p>{this.context.spells.spell_name}</p>
        <Spell
            key={1}
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
            higherLevels={spell.higher_levels ? spell.higher_levels : 0} // this helps the conditional rendering since this page is unusual case
         />
      </div>
    )
  }
}