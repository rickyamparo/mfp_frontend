import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import RegisterForm from './register_form'

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/home-icon.png')}
          />
          <Text style={styles.title}>Please Enter An Email and Password</Text>
        </View>

        <View style={styles.formContainer}>
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
  }
})
