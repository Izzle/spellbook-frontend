import React from 'react';
import { Link } from 'react-router-dom';
import './SpellBookButtons.css';

export default function SpellBookButtons(props){

    // if I had more time I would do a Higher Order Component and / or conditional rendering to
    // merge SpellBookButtons with SpellBookLink. Right now its more important that it just works,
    // I'll worry about technical debt later

    return(<div className='SpellBookButtons__container'>    
        <Link to={{
            pathname: `/spellbook/${props.id}/build`,
            state: {
                spellbook_name: props.name
            }}} 
            className='SpellBookButtons__Link'>
            <button className='SpellBookButtons__button'>Edit Spellbook</button>
        </Link>
        <Link to='/spellbook' className='SpellBookButtons__Link'>
            <button className='SpellBookButtons__button'>View All Spellbooks</button>
        </Link>
    </div>);
}