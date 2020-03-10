import React, { Component } from 'react';

export default class Spell extends Component {

  render() {
    return (
      <div className='Spell__main'>
          <h4>Fireball</h4>
          <p>Level: 3 // School: Evocation // Range: 150 feet</p>
          <p>Classes: Cleric, Sorcerer, Wizard, Warlock</p>
          <p>Casting Time: 1 Action // Duration: Instantaneous // Components: V, S, M </p>
          <p>Description: boom fire</p>
          <h5>At higher levels</h5>
          <p>Description: Hits even harder</p>
      </div>
    )
  }
}