import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, AsyncStorage, Keyboard } from 'react-native';

export default class Prediction extends Component {
  constructor(props){
    super(props)
    this.state = {
      authToken: '',
      userId: '',
      error: null
    }
  }

  componentDidMount = () => {
    AsyncStorage.getItem('auth_token')
    .then(async (token) => {
      this.setState({'authToken': token})
    })

    AsyncStorage.getItem('user_id')
    .then(async (id) => {
      this.setState({'userId': id})
    })
  }

  static navigationOptions = {
    header: null
  }

  render(){
    return (
      <View style={styles.container}>
      </View>
    )
  }
}
