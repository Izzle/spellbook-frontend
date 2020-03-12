import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {

    render() {
        // The Nav should render as a Hamburge icon on mobile and show the items on a larger screen
        return <ul className='Nav__list'>
            <li><Link to='/' className='Nav__Link'>Home</Link></li>
            <li><Link to='/spells' className='Nav__Link'>Spell Library</Link></li>
            <li><Link to='/spell-creator' className='Nav__Link'>Create a Spell</Link></li>
            <li><Link to='/spellbook' className='Nav__Link'>View Spellbooks</Link></li>
        </ul>
    }
}