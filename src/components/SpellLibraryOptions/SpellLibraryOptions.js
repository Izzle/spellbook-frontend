import React, { Component} from 'react';
import { Link } from 'react-router-dom';

export default class SpellLibraryOptions extends Component {

    render() {
        // should refactor this to actually pull the classes from the DB so this list is dynamic and only includes those classes
        // then if a new class is added it will work be simple to add in
        return <>
          <label htmlFor="class-select">Select a class</label>

          <select name="classes" id="class-select">
              <option value="">Class Name</option>
              <option value="bard">Bard</option>
              <option value="cleric">Cleric</option>
              <option value="druid">Druid</option>
              <option value="paladin">Paladin</option>
              <option value="sorcerer">Sorcerer</option>
              <option value="wizard">Wizard</option>
              <option value="warlock">Warlock</option>
          </select>

          <label htmlFor="spell-filter">Filter</label>

          <select name="filters" id="spell-filter">
              <option value="">By</option>
              <option value="level">Level</option>
              <option value="range">Range</option>
              <option value="TESTVLAUES">TEST VALUES</option>
              <option value="TESTVLAUES2">TEST VALUES 2</option>
          </select>
        </>
    }
}