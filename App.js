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

    LocationServicesDialogBox.checkLocationServicesIsEnabled({
            message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
            ok: "YES",
            cancel: "NO",
            enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => ONLY GPS PROVIDER
            showDialog: true, // false => Opens the Location access page directly
            openLocationServices: true, // false => Directly catch method is called if location services are turned off
            preventOutSideTouch: false, //true => To prevent the location services popup from closing when it is clicked outside
            preventBackClick: false //true => To prevent the location services popup from closing when it is clicked back button
        }).then(function(success) {
          console.log(success); // success => {alreadyEnabled: false, enabled: true, status: "enabled"}
        }).catch((error) => {
          console.log(error.message); // error.message => "disabled"
        });

        BackHandler.addEventListener('hardwareBackPress', () => { //(optional) you can use it if you need it
               LocationServicesDialogBox.forceCloseDialog();
        });
  }

  render() {
    return (
      <SimpleApp />
    );
  }
}
