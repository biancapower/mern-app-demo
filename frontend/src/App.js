import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCounter: 0,
    };
    // get loadcount from backend (in background)
    fetch('/loadCounter')
      // get data from response
      .then(response => response.json())
      // update page
      .then(count => this.setState({
        viewCounter: count,
      }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This page has been loaded {this.state.viewCounter} times!</p>
      </div>
    );
  }
}

export default App;
