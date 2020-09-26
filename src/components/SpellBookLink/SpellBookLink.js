import React from 'react';
import { Link } from 'react-router-dom';
import './SpellBookLink.css';

export default function SpellBookLink(props){

    return(
        <Link to={{
            pathname: `/spellbook/${props.id}`,
            state: {
                spellbook_name: props.name
            }}} 
            className='SpellBookLink__Link'>
          <button className='SpellBookLink__button'>{props.name}</button>
          <p>MAKE THE LINKS LOOK LIKE ACTUAL BOOKS?!</p>
        </Link>
    );
}