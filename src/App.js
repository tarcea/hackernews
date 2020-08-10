import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    const helloReact = 'Hello my friends!!!';
    return(
      <div className="App">
      <h2>{helloReact}</h2>
      </div>
    );
  }
}
export default App;
