import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Splash from './src/components/splash/splash'
import Login from './src/components/login/login'
import Register from './src/components/register/register'
import Dashboard from './src/components/dashboard/dashboard'
import Location from './src/components/locationTracker/location'

export const SimpleApp = StackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
  Dashboard: {screen: Dashboard}
})

export default class App extends Component<{}> {
  render() {
    return (
      <Dashboard />
    );
  }
}
