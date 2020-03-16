import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './SpellBookButtons.css';

export default class SpellBookButtons extends Component {

    render() {
        return(<div>
            <Link to='/spellbook-builder' className='SpellBookButtons__Link'>
                <button className='SpellBookButtons__button'>Customize your Spellbook (or Edit. Or build. Pick your verb)</button>
            </Link>
            <Link to='/spellbook' className='SpellBookButtons__Link'>
                <button className='SpellBookButtons__button'>This button should tell you the name of the Spellbook you're in. Also, it will take you back to 'View Spellbook' page at /spellbook</button>
            </Link>
        </div>);
    }
}