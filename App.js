import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, BackHandler } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Splash from './src/components/splash/splash'
import Login from './src/components/login/login'
import Register from './src/components/register/register'
import Dashboard from './src/components/dashboard/dashboard'
import Prediction from './src/components/prediction/prediction'
import Analysis from './src/components/analysis/analysis'
import LocationTracker from './src/components/locationTracker/locationTracker'
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import Permissions from 'react-native-permissions'


export const SimpleApp = StackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
  Dashboard: {screen: Dashboard},
  LocationTracker: {screen: LocationTracker},
  Prediction: {screen: Prediction},
  Analysis: {screen: Analysis}
})

export default class App extends Component {
  state = {
    initialPosition: 'unknown'
  }

  componentDidMount() {
    Permissions.request('location').then(response => {
      this.setState({ locationPermission: response })
    })
  }

  render() {
    return (
      <SimpleApp />
    );
  }
}
