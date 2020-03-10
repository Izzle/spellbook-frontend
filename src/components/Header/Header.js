import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link to='/login' className='Header__Link'>
          Log In
        </Link>
        <Link to='/register' className='Header__Link'>
          Register
        </Link>
      </div> 
    )
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'
          className='Header__Link'>
        Logout</Link>
      </div>
    )
  }


  render() {
      return <>
        <nav className='Header'>
          <Nav />
          <h1>
              <Link to='/'>Spellbook</Link>
          </h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </>
  }
}