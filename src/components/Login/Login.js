import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/home-icon.png')}
          />
          <Text style={styles.title}>A Location Tracking & Predicting App</Text>
        </View>

        <View style={styles.formContainer}>
          <LoginForm />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16a085"
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    textAlign: 'center',
    width: 150,
    opacity: 0.7
  }
})
