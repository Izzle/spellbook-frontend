import React, { Component } from 'react';
import SpellContext from '../../contexts/SpellContext';
import SpellApiService from '../../services/spell-api-service';
// most of this code is scratch
// its not really being used, it was stuff i was typing before I knew what I was doing
// feel free to erase everything in here
export default class SpellPage extends Component {
  static defaultProps = {
      match: { params: {} }
  };

  static contextType = SpellContext;

  componentDidMount() {
    const { id } = this.props.match.params;
    this.context.clearError();

    SpellApiService.getSpellById(id)
    //
    //   .catch(this.context.setError);
  }

  render() {
    return (
      <div className='SpellPage'>
        <h2>An page for individual spell!</h2>
      </div>
    )
  }
}