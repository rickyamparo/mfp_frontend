import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage, StatusBar } from 'react-native';

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
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <View>
          <Text style={styles.currentLocation}> Your Current Location Is: </Text>
        </View>
        <View>
          <Text style={styles.currentLocation}> View Archived Locations </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0DA8AD'
  },
  currentLocation: {
    color: '#FFF',
    marginTop: 10,
    opacity: 0.7,
    fontSize: 20,
    textAlign: 'center'
  }
})
