import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

class App extends Component{

  state = { hasError: false};

  static getDerviedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    );
  }

}

export default App;
