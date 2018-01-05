import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, AsyncStorage, Keyboard } from 'react-native';
import styles from '../../../src/styles/login/loginFormStyles'

const doSignIn = (email, password) => {
  return fetch('https://vast-wildwood-58678.herokuapp.com/authenticate', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson
  })
  .catch((error) => {
    alert(error)
  })
}


export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = { emailInput: '' }
    this.state = { passwordInput: ''}
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='email'
          placeholderTextColor='rgba(255,255,255,0.7)'
          returnKeyLabel='next'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
          onChangeText={
            (text) => this.setState({emailInput: text})
          }
        />
        <TextInput
          placeholder='password'
          placeholderTextColor='rgba(255,255,255,0.7)'
          secureTextEntry
          returnKeyLabel='go'
          style={styles.input}
          onChangeText={
            (text) => this.setState({passwordInput: text})
          }
        />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={
            () => doSignIn(this.state.emailInput, this.state.passwordInput)
            .then(async (auth_response) => {
              try {
                await AsyncStorage.setItem('auth_token', auth_response.auth_token)
                await AsyncStorage.setItem('user_id', auth_response.user_id)
              } catch (error) {
                alert(error)
              }
            })
            .then((auth_token) => {
              navigate('Dashboard')
            })
            .then(() => Keyboard.dismiss())
          }
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={() => navigate('Register')}
        >
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
