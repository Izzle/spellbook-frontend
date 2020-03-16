import React, { Component } from 'react';
import SpellContext from '../../contexts/SpellContext';
import SpellApiService from '../../services/spell-api-service';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';
import SpellBookButtons from '../../components/SpellBookButtons/SpellBookButtons';
import Spell from '../../components/Spell/Spell';
import './SpellBookPage.css';

export default class SpellBookPage extends Component {
    static defaultProps = {
        match: { params: {} }
    };

    static contextType = SpellContext;

    componentDidMount() {
        const { id } = this.props.match.params;
        this.context.clearError();
        // Gets the spells from DB and updates state to use that
        SpellApiService.getAllSpellsInSpellbookById(id)
          .then(this.context.setSpells)
          .catch(this.context.setError);
    }

    render() {
        const { spells = [] } = this.context;
        return (
            <section className='SpellBookPage'>
                <div className='SpellBookPage__container'>
                <SpellLibraryOptions />
                <SpellBookButtons />
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