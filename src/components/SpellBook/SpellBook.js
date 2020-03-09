import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import SpellContext from '../../contexts/SpellContext';
import SpellItem from '../../components/SpellItem/SpellItem';
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
                <SpellItem />
            </div>
        )
    }
}