import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends Component {


    render() {
        return <>
          <nav className='Header'>
            <Nav />
            <h1>
                <Link to='/'>Spellbook</Link>
            </h1>
            {TokenService.}
          </nav>
        </>
    }
}