import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './SpellBookButtons.css';

export default class SpellBookButtons extends Component {

    // if I had more time I would do a Higher Order Component and / or conditional rendering to
    // merge SpellBookButtons with SpellBookLink. Right now its more important that it just works,
    // I'll worry about technical debt later

    render() {
        return(<div>
            <Link to={`/spellbook/${this.props.id}/edit`} className='SpellBookButtons__Link'>
                <button className='SpellBookButtons__button'>Customize your Spellbook (or Edit. Or build. Pick your verb)</button>
            </Link>
            <Link to='/spellbook' className='SpellBookButtons__Link'>
                <button className='SpellBookButtons__button'>This button should tell you the name of the Spellbook you're in. Also, it will take you back to 'View Spellbook' page at /spellbook</button>
            </Link>
        </div>);
    }
}