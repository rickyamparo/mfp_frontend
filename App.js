
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Splash from './src/components/splash/splash'
import Login from './src/components/login/login'
import Register from './src/components/register/register'

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }
  render() {
    return <Login />
  }
}

export const SimpleApp = StackNavigator({
  Login: {screen: LoginScreen}
})

export default class App extends Component<{}> {
  render() {
    return (
      <SimpleApp />
    );
  }
}
