import React, { Component } from 'react';
import SpellContext from '../../contexts/SpellContext';
import ValidationError from '../../components/ValidationError/ValidationError';

export default class CreateSpellPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        value: '',
        touched: false
      },
      school: {
        value: '',
        touched: false
      },
      level: {
        value: '',
        touched: false
      },
      castingTime: {
        value: '',
        touched: false
      },
      range: {
        value: '',
        touched: false
      },
      spellComponents: {
        value: '',
        touched: false
      },
      duration: {
        value: '',
        touched: false
      },
      description: {
        value: '',
        touched: false
      },
      higherLevels: {
        value: '',
        touched: false
      }
    }
  }

  static contextType = SpellContext;

  // A form to capture the information for a new spell. Submit to a POST to '/PLACEHOLDER' endpoint

  updateSpell(value, keyName) {
    // Whenever the user types anything into the input, we update the state! each letter at a time!
    // When the user types ANYTHING we set the value of touched to "true" from "false" this way we know
    // when to correctly render our ValidationError
    let newState = { [keyName]: {value, touched: true}};
    console.log(newState);

    this.setState(newState);
  }

  validateName() {
    // Validates the name of a new spell
    // this removes any whitespace from value and makes sure the value isnt empty
    const name = this.state.name.value.trim();
    if(name.length === 0) {
      return 'Please enter a spell name';
    } else if(name.length > 30) {
      return 'Please keep the spell name under 30 characters'
    }
  }

  render() {
    const nameError = this.validateName();

    return (
      <section className='CreateSpellPage__main'>
          <form className='CreateSpellPage__form'>
            <h2>Create a new Spell</h2>
            <div className='form-group'>
              <label htmlFor='add-spell-name'>Spell Name </label>
              <input
                type='text'
                className='CreateSpellPage__control'
                // on submit, the name will what the server will get data keys name after
                name='add-spell-name'
                id='add-spell-name'
                 // Each time the user types anything into input, we update the state. This allows real-time error messages (ie before submit)
                onChange={e => this.updateSpell(e.target.value, 'name')}
                required
                />
              {/* Conditional rendering depending on whether the user has changed the input or not */}
              {this.state.name.touched && (<ValidationError message={nameError} />)}
            </div>

            <div className='form-group'>
              <label htmlFor='add-spell-school'>Magic School </label>
              <input
                type='text'
                className='CreateSpellPage__control'
                // on submit, the name will what the server will get data keys name after
                name='add-spell-school'
                id='add-spell-school'
                 // Each time the user types anything into input, we update the state. This allows real-time error messages (ie before submit)
                onChange={e => this.updateSpell(e.target.value, 'school')}
                required
                />
                {/* ADD VALIDATION HERE */}
            </div>

            <div className='form-group'>
              <label htmlFor='add-spell-level'>Level </label>
              <input
                type='text'
                className='CreateSpellPage__control'
                // on submit, the name will what the server will get data keys name after
                name='add-spell-level'
                id='add-spell-level'
                 // Each time the user types anything into input, we update the state. This allows real-time error messages (ie before submit)
                onChange={e => this.updateSpell(e.target.value, 'level')}
                required
                />
                {/* ADD VALIDATION HERE */}
            </div>

            <div className='form-group'>
              <label htmlFor='add-spell-castingTime'>Casting Time </label>
              <input
                type='text'
                className='CreateSpellPage__control'
                // on submit, the name will what the server will get data keys name after
                name='add-spell-castingTime'
                id='add-spell-castingTime'
                 // Each time the user types anything into input, we update the state. This allows real-time error messages (ie before submit)
                onChange={e => this.updateSpell(e.target.value, 'castingTime')}
                required
                />
                {/* ADD VALIDATION HERE */}
            </div>

            <div className='form-group'>
              <label htmlFor='add-spell-range'>Range </label>
              <input
                type='text'
                className='CreateSpellPage__control'
                // on submit, the name will what the server will get data keys name after
                name='add-spell-range'
                id='add-spell-range'
                 // Each time the user types anything into input, we update the state. This allows real-time error messages (ie before submit)
                onChange={e => this.updateSpell(e.target.value, 'range')}
                required
                />
                {/* ADD VALIDATION HERE */}
            </div>

            <div className='form-group'>
              <label htmlFor='add-spell-components'>Components </label>
              <input
                type='text'
                className='CreateSpellPage__control'
                // on submit, the name will what the server will get data keys name after
                name='add-spell-components'
                id='add-spell-components'
                 // Each time the user types anything into input, we update the state. This allows real-time error messages (ie before submit)
                onChange={e => this.updateSpell(e.target.value, 'spellComponents')}
                required
                />
                {/* ADD VALIDATION HERE */}
            </div>

            <div className='form-group'>
              <label htmlFor='add-spell-duration'>Duration </label>
              <input
                type='text'
                className='CreateSpellPage__control'
                // on submit, the name will what the server will get data keys name after
                name='add-spell-duration'
                id='add-spell-duration'
                 // Each time the user types anything into input, we update the state. This allows real-time error messages (ie before submit)
                onChange={e => this.updateSpell(e.target.value, 'duration')}
                required
                />
                {/* ADD VALIDATION HERE */}
            </div>

            <div className='form-group'>
              <label htmlFor='add-spell-description'>Description </label>
              <textarea
                rows='5'
                cols='35'
                className='CreateSpellPage__control'
                // on submit, the name will what the server will get data keys name after
                name='add-spell-description'
                id='add-spell-description'
                 // Each time the user types anything into input, we update the state. This allows real-time error messages (ie before submit)
                onChange={e => this.updateSpell(e.target.value, 'description')}
                required
                />
                {/* ADD VALIDATION HERE */}
            </div>
          </form>
      </section>
    )
  }
}