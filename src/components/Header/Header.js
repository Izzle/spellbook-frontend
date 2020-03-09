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
        <Link to='/'>
          Log In
        </Link>
        <Link to='/'>
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
          to='/'>
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