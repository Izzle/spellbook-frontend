import React from 'react';
import { Link } from 'react-router-dom';
import './BuildSpellBookButtons.css';

export default function BuildSpellBookButtons(props) {

    // need the eventHandler to trigger and THEN we route to another page, so we don't use a Link here
    // after the service sends the new PUT request, we chain a .then(props.history.push(`/spellbooks/${paramsId}`))

    return(
        <div>
            <button onClick={() => props.onSaveSubmit()} type='submit' className='BuildSpellBookButtons__button'>Save Spellbook</button>

            <Link to={`/spellbook`} className='BuildSpellBookButtons__Link'>
              <button className='BuildSpellBookButtons__button'>View All Spellbooks</button>
            </Link>
        </div>
    );

}