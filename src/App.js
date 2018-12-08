import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import { About } from './components/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
