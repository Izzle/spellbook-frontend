import React, { Component } from 'react';
import SpellLibraryContext from '../../contexts/SpellLibraryContext';
import SpellLibraryOptions from '../../components/SpellLibraryOptions/SpellLibraryOptions';

export default class SpellLibraryPage extends Component {
  static contextType = SpellLibraryContext;


  render() {
    return (
      <section className='SpellLibraryPage'>
          <SpellLibraryOptions />
      </section>
    )
  }
}