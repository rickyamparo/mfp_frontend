import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, StatusBar, } from 'react-native';
import RegisterForm from './register_form'

export default class Register extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <Text style={styles.header}> A React Native App by Ricky Amparo</Text>
        <Text style={styles.info}>Account Registration</Text>

        <View>
          <RegisterForm />
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
    marginTop: 25
  },
  logo: {
    width: 100,
    height: 100
  },
  header: {
    color: '#FFF',
    marginTop: 5,
    textAlign: 'center',
    opacity: 0.7
  },
  info: {
    color: '#FFF',
    marginTop: 25,
    textAlign: 'center',
    width: 250,
    opacity: 0.7,
    fontSize: 20
  }
})
