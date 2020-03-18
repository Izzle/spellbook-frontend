import React, { Component } from 'react';
import './Spell.css';

export default class Spell extends Component {
  // can I use conditional rendering?
  // this is breaking SpellLibraryPage because there is no function for that one.
    static defaultProps = {
      onSpellClick: () => {},
      spellSelected: null,
      id: null
    }


    render() {
      return (
        <div onClick={() => this.props.onSpellClick(this.props.id)} className={this.props.spellSelected ? `Spell__main Spell__selected` : 'Spell__main'}>
            <h3>{this.props.name}</h3>
            <p>{`Level: ${this.props.level === 0 ? 'Cantrip': this.props.level} | ${this.props.school} | ${this.props.range}`}</p>
            {/* <p>{`Classes: ${this.props.classes} (FIX THIS: Currently using the class ID)`}</p> */}
            <p>{`${this.props.castingTime} | ${this.props.duration} | Components: ${this.props.spellComponents}`}</p>
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