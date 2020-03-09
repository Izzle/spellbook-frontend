import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {

    render() {
        return <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Spell Library</Link></li>
            <li><Link to='/'>Create a Spell</Link></li>
            <li><Link to='/'>Build a Spellbook</Link></li>
        </ul>
    }
}