import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import LoginForm from './login_form'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16a085'
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
    opacity: 0.7,
    fontSize: 20
  },
  header: {
    color: '#FFF',
    marginTop: 5,
    textAlign: 'center',
    opacity: 0.7
  }
})
