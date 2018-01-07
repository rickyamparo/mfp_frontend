import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import styles from '../../../src/styles/register/registerFormStyles'
import registerUser from '../../../src/fetch/createUser'

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
