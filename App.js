
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
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
