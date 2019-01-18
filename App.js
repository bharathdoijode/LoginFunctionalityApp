/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Login from './src/Login/Login';
import allReducers from './src/Reducers';

const reducers = combineReducers({
  ...allReducers,
});
const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Login/>
    </Provider>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
