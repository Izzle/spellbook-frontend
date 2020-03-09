import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage';
import BuildSpellBookPage from '../../routes/BuildSpellBookPage';
import CreateSpellPage from '../../routes/CreateSpellPage';
import LoginPage from '../../routes/LoginPage';
import NotFoundPage from '../../routes/NotFoundPage';
import RegisterPage from '../../routes/RegisterPage';
import ResetPasswordPage from '../../routes/ResetPasswordPage';
import SpellLibraryPage from '../../routes/SpellLibraryPage';
import SpellPage from '../../routes/SpellPage';
import './App.css';

class App extends Component{

  // state = { hasError: false};

  // static getDerviedStateFromError(error) {
  //   console.log(error);
  //   return { hasError: true };
  // }

  componentDidMount() {

  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage}/>
            <Route 
              path={'/spellbook-builder'}
              component={BuildSpellBookPage}
            />
            <Route 
              path={'/spell-creator'}
              component={CreateSpellPage}
            />
            <Route 
              path={'/login'}
              component={LoginPage}
            />
            <Route 
              path={'/page-not-found'}
              component={NotFoundPage}
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
              path={'/spells'}
              component={SpellLibraryPage}
            />
            <Route 
              path={'/spells/:id'}
              component={SpellPage}
            />
          </Switch>
        </main>
      </div>
    );
  }

}

export default App;
