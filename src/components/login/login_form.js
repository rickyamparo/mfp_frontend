import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

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
    alert(responseJson.auth_token)
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
          onPress={() => doSignIn(this.state.emailInput, this.state.passwordInput)}
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
  buttonLogin: {
    backgroundColor: '#9b59b6',
    paddingVertical: 8,
    marginBottom: 30
  },
  buttonCreate: {
    backgroundColor: '#8e44ad',
    paddingVertical: 8
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF'
  }
})
