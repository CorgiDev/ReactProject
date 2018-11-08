import React, { Component } from 'react';

//Imports first css files
import './components/styles/normalize.css';
import './App.css';

//Imports other page bodies
import Home from './views/Home';
import Accessibility from './views/Blog';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/Blog' render={() => (
            <div className="App">
              <Accessibility />
            </div>
          )}/>
          <Route exact={true} path='/AboutMe' render={() => (
            <div className="App">
              <AboutMe />
            </div>
          )}/>
          <Route exact={true} path='/Contact' render={() => (
            <div className="App">
              <Contact />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
