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

import './App.css';


class App extends Component{

  state = { 
    hasError: false
  };

  static getDerviedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  
  componentDidMount() {

  }

  render() {
    return (
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
              {/* <Route             // will add in the future
                path={'/login'}
                component={LoginPage}
              />
              <Route 
                path={'/register'}
                component={RegisterPage}
              /> */}
              <Route 
                path={'/reset-password'}
                component={ResetPasswordPage}
              />
              <Route 
                exact
                path={'/spellbook'}
                component={SpellBookListPage}/>
              <Route 
                exact
                path={'/spellbook/:id'}
                component={SpellBookPage}/>
              <Route 
                path={'/spellbook/:id/build'} // I know its not very RESTful, but it works for now
                component={BuildSpellBookPage}
              />
              <Route 
                path={'/spell-creator'}
                component={CreateSpellPage}
              />
              <Route 
                exact
                path={'/spells'}
                component={SpellLibraryPage}
              />
              {/* <Route               // this endpoint is to be used in a future feature
                path={'/spells/:id'}
                component={SpellPage}
              /> */}
              <Route 
                component={NotFoundPage}
              />
            </Switch>
          </main>
        </div>
    );
  }

}

export default App;
