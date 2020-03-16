import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './BuildSpellBookButtons.css';

export default class BuildSpellBookButtons extends Component {

    // constructor(props) {
    //     super(props);
    //     this.goBack = this.goBack.bind(this);
    // }

    // goBack() {
    //     this.props.history.goBack();
    // }

    handleSaveButton = (what) => {
        //event.preventDefault();
        console.log('yep you clicked a button');
        // PROBABLY SHOULD USE "onSaveSubmit from the parent component!"
       // console.log(this.props.history.goBack()); //undefined
    }
    render() {
        return(<div>
            <Link to={this.handleSaveButton} className='BuildSpellBookButtons__Link'>
                <button type='submit' className='BuildSpellBookButtons__button'>SAVE SPELLBOOK(not changing pages current. worry about it POSTIng first)</button>
            </Link>
            <Link to='/spellbook' className='BuildSpellBookButtons__Link'>
                <button className='BuildSpellBookButtons__button'>This shouldnt do anything but look pretty.</button>
            </Link>
        </div>);
    }
}