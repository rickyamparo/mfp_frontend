import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, AsyncStorage, StatusBar } from 'react-native';

export default class LocationTracker extends Component {

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
      <Text> Hello World!!!!</Text>
    )
  }
}
