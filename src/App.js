import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Lore from './Components/Lore';
import Characters from './Components/Characters';
import Character from './Components/Character';
import Items from './Components/Items';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div>
            <Route exact path="/" component={() => <Home />} />
            <Route path="/lore" component={() => <Lore />} />
            <Route path="/characters" component={() => <Characters />} />
            <Route path='/character/:character_name' component={(props) => <Character {...props} />} />
            <Route path='/items' component={() => <Items />} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
