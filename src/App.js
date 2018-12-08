import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Sample1 } from './components/Sample1';

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
            <Route path ="/sample1" component={Sample1} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
