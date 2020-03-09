import React, { Component } from 'react';
import SpellContext from '../../contexts/SpellContext';
// most of this code is scratch
// its not really being used, it was stuff i was typing before I knew what I was doing
// feel free to erase everything in here
export default class SpellPage extends Component {
  static defaultProps = {
      match: { params: {} }
  };

  static contextType = SpellContext;

  componentDidMount() {
    const id = this.props.match.parms;
    console.log(id);
  }

  render() {
    return (
      <div className='SpellPage'>
        {/* <h4>{spellInfo.name}</h4>
        <p>Level: {spellInfo.level} </p> */}
      </div>
    )
  }
}