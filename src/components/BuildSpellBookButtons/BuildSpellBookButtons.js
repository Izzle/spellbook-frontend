import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './BuildSpellBookButtons.css';

export default class BuildSpellBookButtons extends Component {


    // need to the eventHnadler to work and THEN we route to another page.
    // after the service sends the new PUT request, chain a .then(this.props.history.push(`/spellbooks/${paramsId}`))
    // <Link onClick={() => this.props.onSaveSubmit} to={`/spellbook/${this.props.paramsId}`} className='BuildSpellBookButtons__Link'>
    render() {
        return(<div>
                <button onClick={() => this.props.onSaveSubmit()} type='submit' className='BuildSpellBookButtons__button'>Save Spellbook</button>
            
            <Link to='/spellbook' className='BuildSpellBookButtons__Link'>
                <button className='BuildSpellBookButtons__button'>This should ask the user if they're sure they want to go back to their spellbook or go to all spellbooks</button>
            </Link>
        </div>);
    }
}