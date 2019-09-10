import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import View from './View';
import Config from './Config';
import NavBar from './NavBar';

export default class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <NavBar />
          <Switch>
              <Route exact path='/' component={View} />
              <Route path='/config' component={Config} />
          </Switch>
        </div>
      </Router>
    );
  }
}