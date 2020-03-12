import React, { Component } from 'react';
import SpellContext from '../../contexts/SpellContext';
import SpellApiService from '../../services/spell-api-service';
// most of this code is scratch
// its not really being used, it was stuff i was typing before I knew what I was doing
// feel free to erase everything in here
export default class SpellPage extends Component {
  static defaultProps = {
      match: { params: { id: '1'} }
  };

  static contextType = SpellContext;

  componentDidMount() {
    const { id } = this.props.match.params;
    
    console.log(id);
    SpellApiService.getSpellById(id)
      .then(this.context.setSpells)
      .catch(this.context.setError);
  }

  render() {
    console.log(this.props.match);
    return (
      <div className='SpellPage'>
        <h2>An page for individual spells!</h2>
      </div>
    )
  }
}