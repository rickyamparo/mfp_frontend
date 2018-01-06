import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, AsyncStorage, Keyboard, StatusBar } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0DA8AD'
  },
  dateField: {
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
