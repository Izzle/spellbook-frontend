import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './SpellBookButtons.css';

export default class SpellBookButtons extends Component {

    // WE SHOULD DO CONDITIONAL RENDER
    // OR EVEN A HIGHER ORDER COMPONENT
    // LIKE IN THE ENDPOINTS SECTION
    // In one case, load the button that lets you EDIT your spellbook
    // in the other case, load the button that lets you SAVE your spellbook
    // ALSO. The 2nd button shouldnt do anything when you are building your spellbook- 
    //     so you don't accidentally click a link in the middle of your spellbook editing/building

    render() {
        return(<div>
            <button>edit spellbook</button>
            <Link to='/spellbook' className='SpellBookButtons__Link'>
                <button className='SpellBookButtons__button'>This button should tell you the name of the Spellbook you're in. Also, it will take you back to 'View Spellbook' page at /spellbook</button>
            </Link>
        </div>);
    }
}