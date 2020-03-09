import React, { Component} from 'react';
import { Link } from 'react-router-dom';

export default class Spellbook extends Component {

    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <p>{this.props.spells}</p>
            </div>
        )
    }
}