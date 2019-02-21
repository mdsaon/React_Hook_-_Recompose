import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Example with React recompose</h1>
          <Home />
      <h1>Example with React Hook</h1>
          <About />
      </div>
    );
  }
}

export default App;
