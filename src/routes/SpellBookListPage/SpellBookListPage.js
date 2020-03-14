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
        </div>
      </section>
    )
  }
}