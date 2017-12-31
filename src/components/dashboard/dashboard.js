import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, AsyncStorage } from 'react-native';

export default class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = { authToken: ''}
  }

  componentDidMount = () => {
    AsyncStorage.getItem('auth_token')
    .then(async (token) => {
      this.setState({'authToken': token})
    })
  }

  render (){
    return (

      <View>
        <Text> Dashboard </Text>
        <Text> {this.state.authToken} </Text>
      </View>
    )
  }
}
