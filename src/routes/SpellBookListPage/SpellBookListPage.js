import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SpellBookListPage extends Component {
  render() {
    return (
      <section className='SpellBookListPage'>
          <h2>View your Spellbook selections here!</h2>
          {/* I'm hardcoding in the :id here, but it should take the ID from the spellbook from the database when we have user accounts*/}
          {/* <Link to='/spellbook/:id' className='SpellBookListPage__Link'></Link> */}
          <Link to='/spellbook/1' className='SpellBookListPage__Link'>
            Deck 1 (should be)
          </Link>
          <Link to='/spellbook/:id' className='SpellBookListPage__Link'>
            Deck 2
          </Link>
          <Link to='/spellbook/:id' className='SpellBookListPage__Link'>
            Deck 3
          </Link>
      </section>
    )
  }
}