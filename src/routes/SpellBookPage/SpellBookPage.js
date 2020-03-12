import React, { Component } from 'react';
import SpellContext from '../../contexts/SpellContext';
import SpellApiService from '../../services/spell-api-service';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';
import Spell from '../../components/Spell/Spell';
import './SpellBookPage.css';


// Different might be needed ( or maybe just in SpellBookListPage)
// NEW METHODS ARE NEEDED FOR OUR SERVICE
export default class SpellBookPage extends Component {

    static contextType = SpellContext;

    componentDidMount() {
        //SpellApiService.getSpellBook() // or .getSpellBookById ?
          //.then(this.context.setSpellsEquivalent('may setSpellBook'))
          //.catch(this.context.setError);
    }

    render() {
        const { spells = [] } = this.context;
        return (
            <section className='SpellBookPage'>
                <div className='SpellBookPage__container'>
                <SpellLibraryOptions />
                <div className='SpellBookPage__Spells__container'>
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
                        />
                    })}
                </div>
                </div>
            </section>
        );
    }
}