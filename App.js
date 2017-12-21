
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Splash from './src/components/splash/splash'
import Login from './src/components/login/login'
import Register from './src/components/register/register'

export default class App extends Component<{}> {
  render() {
    return (
      <Login />
    );
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
