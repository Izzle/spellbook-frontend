import React, { Component } from 'react';
import './Spell.css';

export default class Spell extends Component {
  // can I use conditional rendering?
  // this is breaking SpellLibraryPage because there is no function for that one.
    static defaultProps = {
      onSpellClick: () => {},
    }
    
    render() {
      return (
        <div onClick={() => this.props.onSpellClick(this.props.id)} className='Spell__main'>
            <h4>{this.props.name}</h4>
            <p>{`Level: ${this.props.level === 0 ? 'Cantrip': this.props.level} // School: ${this.props.school} // Range: ${this.props.range}`}</p>
            <p>{`Classes: ${this.props.classes} (FIX THIS: Currently using the class ID)`}</p>
            <p>{`Casting Time: ${this.props.castingTime} // Duration: ${this.props.duration} // Components: ${this.props.spellComponents}`}</p>
            <p>{`Description: ${this.props.description}`}</p>
            
            {this.props.higherLevels.length > 0 && 
              <>
                <h5>At higher levels</h5> 
                <p>{this.props.higherLevels}</p>
              </>
            }
        </div>
      )
      }
}