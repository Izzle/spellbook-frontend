import React, { Component} from 'react';
import SpellContext from '../../contexts/SpellContext';
import Spell from '../../components/Spell/Spell';
import STORE from '../../store';

export default class Spellbook extends Component {

    static contextType = SpellContext;

    componentDidMount() {
        // Use something like this when the API is working
        //   SpellApiService.getSpells()
        //    .then(this.context.setSpellBookList)
        //    .catch(this.context.setError);
        this.context.setSpells(STORE.spells);
      }
    
        
    render() {
        const { spells = [] } = this.context;
        console.log(spells);
        return (
            <div>
                <h4>{this.props.name}</h4>
                <p>{this.props.spellsInBook}</p>
                <Spell />
            </div>
        )
    }
}