import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {
  render () {
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
        />
        <TextInput
          placeholder='password'
          placeholderTextColor='rgba(255,255,255,0.7)'
          secureTextEntry
          returnKeyLabel='go'
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCreate}>
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
