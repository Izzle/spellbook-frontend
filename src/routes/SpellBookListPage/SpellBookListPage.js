import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SpellBookLink from '../../components/SpellBookLink/SpellBookLink';
import SpellApiService from '../../services/spell-api-service';
import SpellBookListContext from '../../contexts/SpellBookListContext';
import './SpellBookListPage.css';

export default class SpellBookListPage extends Component {

  static contextType = SpellBookListContext;
  
  componentDidMount() {
    // service, context, error
    SpellApiService.getAllSpellBooks()
      .then(this.context.setSpellBookList)
      .catch(this.context.setError);
  }
  
  render() {
    const { spellbookList = [] } = this.context;

    return (
      <section className='SpellBookListPage'>
        <div className='SpellBookListPage__container'>
          <h2>View your Spellbook selections here!</h2>
          {spellbookList.map((spellbook, idx )=> {
            return <SpellBookLink
                      key={idx}
                      id={spellbook.id}
                      name={spellbook.spellbook_name}/>
          })}
          {/* I'm hardcoding in the :id here, but it should take the ID from the spellbook from the DATABASE when we have user accounts*/}
          {/* <Link to='/spellbook/:id' className='SpellBookListPage__Link'></Link> */}
          <Link to='/spellbook/1' className='SpellBookListPage__Link'>
            <button className='SpellBookListPage__button'>Deck 1</button>
          </Link>
          <Link to='/spellbook/2' className='SpellBookListPage__Link'>
            <button className='SpellBookListPage__button'>Deck 2</button>
          </Link>
          <Link to='/spellbook/3' className='SpellBookListPage__Link'>
            <button className='SpellBookListPage__button'>Deck 3</button>
          </Link>
          <Link to='/spellbook/:id' className='SpellBookListPage__Link'>
            <button className='SpellBookListPage__button'>Change decks to use the :id params from the Database!</button>
          </Link>
        </div>
      </section>
    )
  }
}