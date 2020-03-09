import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage';
import BuildSpellBookPage from '../../routes/BuildSpellBookPage/BuildSpellBookPage';
import CreateSpellPage from '../../routes/CreateSpellPage/CreateSpellPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import ResetPasswordPage from '../../routes/ResetPasswordPage/ResetPasswordPage';
import SpellLibraryPage from '../../routes/SpellLibraryPage/SpellLibraryPage';
import SpellPage from '../../routes/SpellPage/SpellPage';
import SpellLibraryContext from '../../contexts/SpellLibraryContext';

import './App.css';

class App extends Component{

  state = { 
    hasError: false,
    spellbooks: []
  };

  static getDerviedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidMount() {

  }

  render() {
    const contextValue = {
      spellbooks: this.state.spellbooks
    };

    return (
      <SpellLibraryContext.Provider value={contextValue}>
        <div className='App'>
          <header className='App__header'>
            <Header />
          </header>
          <main className='App__main'>
            {this.state.hasError && <p className='red'>There was an error!</p>}
            <Switch>
              <Route 
                exact
                path={'/'}
                component={LandingPage}
              />
              <Route 
                path={'/login'}
                component={LoginPage}
              />
              <Route 
                path={'/register'}
                component={RegisterPage}
              />
              <Route 
                path={'/reset-password'}
                component={ResetPasswordPage}
              />
              <Route 
                path={'/spellbook-builder'}
                component={BuildSpellBookPage}
              />
              <Route 
                path={'/spell-creator'}
                component={CreateSpellPage}
              />
              <Route 
                path={'/spells'}
                component={SpellLibraryPage}
              />
              <Route 
                path={'/spells/:id'}
                component={SpellPage}
              />
              <Route 
                path={'/page-not-found'}
                component={NotFoundPage}
              />
            </Switch>
          </main>
        </div>
      </SpellLibraryContext.Provider>
    );
  }

}

export default App;
