import React, { Component } from 'react';
import config from '../../config';
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
    this.setState(newState);
  }

  validateLevel() {
    const level = this.state.level.value.trim();
    if(level.length === 0) {
      return 'Please select a spell level'
    }
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

  handleSubmit(event) {
    event.preventDefault();
    // object destructing to get our variables from state
    const {
      name,
      school,
      level,
      castingTime,
      range,
      spellComponents,
      duration,
      description,
      higherLevels
    } = this.state;
    
    // formatting our data so the server will receive the correct variable names in our POST request
    const data = {
      spell_name: name.value,
      spell_school: school.value,
      spell_level: parseInt(level.value),
      cast_time: castingTime.value,
      spell_range: range.value,
      spell_components: spellComponents.value,
      spell_duration: duration.value,
      spell_description: description.value,
      higher_levels: higherLevels.value
    };

    fetch(`${config.API_ENDPOINT}/spells`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json();
    })
    .then(this.context.addSpell)
    .catch(this.context.setError);
    // REFACTOR THIS TO USE 'SpellApiService.postSpell(data);

// SpellApiService.getAllSpells()
//        .then(this.context.setSpells)
//        .catch(this.context.setError);

  }
  

  render() {
    const levelError = this.validateLevel();
    const nameError = this.validateName();

    return (
      <section className='CreateSpellPage__main'>
          <form className='CreateSpellPage__form' onSubmit={e => this.handleSubmit(e)}>
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
              <label htmlFor="add-spell-level">Level </label>
              <select 
                name="add-spell-level"
                id="add-spell-level"
                onChange={e => this.updateSpell(e.target.value, 'level')}
                required>
                  <option value="">Select spell level</option>
                  <option value="0" defaultValue="selected">Cantrip</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
              </select>
              {this.state.level.touched && (<ValidationError message={levelError} />)}
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

            <div className="CreateSpellPage__button__group">
              <button type="reset" className="CreateSpellPage__button">Cancel</button>
              <button
                type="submit"
                className="CreateSpellPage__button"
                 // if anything triggers our validation method, the button gets disabled
                disabled={this.validateLevel() || this.validateName()}>Create Spell</button>
            </div>
          </form>
      </section>
    )
  }
}