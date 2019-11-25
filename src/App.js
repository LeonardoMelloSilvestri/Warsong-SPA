import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Characters from './Components/Characters';
import Character from './Components/Character';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Route path="/characters" component={() => <Characters />} />
            <Route path='/character/:character_name' component={(props) => <Character {...props} />}
            />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
