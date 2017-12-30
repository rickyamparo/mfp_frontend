import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import LoginForm from './login_form'
import styles from '../../../src/styles/login/loginStyles'

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <Text style={styles.header}> A React Native App by Ricky Amparo</Text>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/home-icon.png')}
          />
          <Text style={styles.title}>A Location Tracking & Prediction App</Text>
        </View>

        <View style={styles.formContainer}>
          <LoginForm navigation = {this.props.navigation}/>
        </View>

      </View>
    )
  }
}
