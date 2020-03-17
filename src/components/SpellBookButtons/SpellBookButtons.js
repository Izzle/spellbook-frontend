import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SpellBookListContext from '../../contexts/SpellBookListContext';
import './SpellBookButtons.css';

export default function SpellBookButtons(props){

    // if I had more time I would do a Higher Order Component and / or conditional rendering to
    // merge SpellBookButtons with SpellBookLink. Right now its more important that it just works,
    // I'll worry about technical debt later

    return(<div>
        <Link to={`/spellbook/${props.id}/build`} className='SpellBookButtons__Link'>
            <button className='SpellBookButtons__button'>Edit Spellbook</button>
        </Link>
        <Link to='/spellbook' className='SpellBookButtons__Link'>
            <button className='SpellBookButtons__button'>FIX: SPELLBOOK NAME</button>
        </Link>
    </div>);
}