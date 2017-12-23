import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { push } from 'react-router-redux';
import Orders from './scenes/Orders';
import Point from './scenes/Point';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={
            props => <Orders {...props} />
          }
        />
        <Route
          path="/point"
          render={
            props => <Point {...props} />
          }
        />
      </Switch>
    );
  }
}
export default Main;
