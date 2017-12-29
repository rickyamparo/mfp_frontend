import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Splash from './src/components/splash/splash'
import Login from './src/components/login/login'
import Register from './src/components/register/register'

export const SimpleApp = StackNavigator({
  Login: {screen: Login},
  Register: {screen: Register}
})

export default class App extends Component<{}> {
  render() {
    return (
      <SimpleApp />
    );
  }
}
