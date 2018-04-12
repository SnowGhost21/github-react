import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import RepositoryListPage from './containers/RepositoryListPage';
import PropTypes from 'prop-types';
import AppBarComponent from './components/AppBarComponent';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/repositories/:user" component={RepositoryListPage} />
          <Route exact path="/repository/:id" component={AppBarComponent} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App;