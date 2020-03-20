import React, { Component } from 'react';

export default class LandingPage extends Component {
  render() {
    return (
      <section className='LandingPage'>
        <h2>What is SpellBook?</h2>
        <p>It's a tool to keep track of your spells in Dungeons and Dragons. You can view and read up on spells, create your own custom spells, and add spells to different spellbooks for each character you play.</p>

        <h2>How do I make a spellbook?</h2>
        <p>First select 'View Spellbooks' then select the book you would like to view. From there, you can click 'Edit Spellbook' to see all available spells. Any spells currently in your Spellbook will be highlighted, just click on any spell to add or remove it.</p>
        <p>When you are done making your selections, click 'Save Spellbook' to save your spellbook for future use.</p>

        <h2>How do I make a new spell?</h2>
        <p>Click on 'Create a Spell' in the navigation, fill out all information about the spell such as its name, range, and duration. When you're done, hit 'Create Spell' and your spell will be added to all the spells in our library. From then on, you can add your custom spell to any spellbook!</p>
      </section>
    )
  }
}
