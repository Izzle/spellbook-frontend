import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage';
import BuildSpellBookPage from '../../routes/BuildSpellBookPage/BuildSpellBookPage';
import CreateSpellPage from '../../routes/CreateSpellPage/CreateSpellPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import ResetPasswordPage from '../../routes/ResetPasswordPage/ResetPasswordPage';
import SpellBookListPage from '../../routes/SpellBookListPage/SpellBookListPage';
import SpellBookPage from '../../routes/SpellBookPage/SpellBookPage';
import SpellLibraryPage from '../../routes/SpellLibraryPage/SpellLibraryPage';
import SpellPage from '../../routes/SpellPage/SpellPage';
import SpellContext from '../../contexts/SpellContext';

import './App.css';


class App extends Component{

  state = { 
    hasError: false,
    spellbooks: [],
    spells: []
  };

  static getDerviedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  setSpellBookList = ( spellbooks ) => {
    this.setState({
      spellbooks
    });
  }

  setSpells = ( spells ) => {
    //console.log(spells);
    this.setState({
      spells
    });
  }

  addSpell = spell => {
    // Adds a spell to state / context
    this.setState([
      ...this.state.spells,
      spell
    ]);
  }

  componentDidMount() {

  }

  render() {
    const contextValue = {
      spellbooks: this.state.spellbooks,
      spells: this.state.spells,
      setSpellBookList: this.setSpellBookList,
      setSpells: this.setSpells
    };

    return (
      <SpellContext.Provider value={contextValue}>
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
                path={'/spellbook'}
                component={SpellBookListPage}/>
              <Route 
                path={'/spellbook/:id'}
                component={SpellBookPage}/>
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
      </SpellContext.Provider>
    );
  }

}

export default App;
