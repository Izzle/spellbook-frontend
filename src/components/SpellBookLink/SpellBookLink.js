import React from 'react';
import { Link } from 'react-router-dom';
import './SpellBookLink.css';

export default function SpellBookLink(props){

    return(
        
        // <Link to={{
        //   pathname: `/spellbook/${props.id}`,
        //   state: {
        //     spellbook: props.name
        //   }
        // }} className='SpellBookLink__Link'>
        <Link to={`/spellbook/${props.id}`} className='SpellBookLink__Link'>
          <button className='SpellBookLink__button'>{props.name}</button>
        </Link>
    );
}