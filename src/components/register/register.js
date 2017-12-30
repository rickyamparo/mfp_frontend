import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, StatusBar, } from 'react-native';
import RegisterForm from './register_form'
import styles from '../../../src/styles/register/registerStyles'

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

        <View style={styles.formContainer}>
          <RegisterForm />
        </View>

      </View>
    )
  }
}
