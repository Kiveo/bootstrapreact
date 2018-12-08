import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
// import { Navbar2 } from './components/Navbar2';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar2 /> */}
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
