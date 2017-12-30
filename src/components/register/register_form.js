import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';

const registerUser = (email, name, password, passwordConfirmation) => {
  return fetch('https://vast-wildwood-58678.herokuapp.com/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user:{
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    alert(responseJson.name)
  })
  .catch((error) => {
    alert(error)
  })
}

export default class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = { nameInput: ''}
    this.state = { emailInput: ''}
    this.state = { passwordInput: ''}
    this.state = { passwordConfirmation: ''}
  }
  render () {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          placeholder='username'
          placeholderTextColor='rgba(255,255,255,0.7)'
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
        />
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
          returnKeyLabel='next'
          style={styles.input}
          onChangeText={
            (text) => this.setState({passwordInput: text})
          }
        />
        <TextInput
          placeholder='confirm password'
          placeholderTextColor='rgba(255,255,255,0.7)'
          secureTextEntry
          returnKeyLabel='go'
          style={styles.input}
          onChangeText={
            (text) => this.setState({passwordConfirmation: text})
          }
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => registerUser(this.state.emailInput, this.state.nameInput, this.state.passwordInput, this.state.passwordConfirmation)}
         >
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 15,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#9b59b6',
    paddingVertical: 8
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  }
})
