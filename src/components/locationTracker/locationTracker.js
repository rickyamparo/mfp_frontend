import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage, StatusBar } from 'react-native';
import DatePicker from 'react-native-datepicker'

const sendLocation = (user_id, latitude, longitude, auth_token) => {
  return fetch('https://vast-wildwood-58678.herokuapp.com/locations', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth_token
    },
    body: JSON.stringify({
      location:{
        latitude: latitude,
        longitude: longitude,
        user_id: user_id
      }
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    alert(responseJson.created_at)
  })
  .catch((error) => {
    alert(error)
  })
}

export default class LocationTracker extends Component {

  constructor(props){
    super(props)
    this.state = {
      authToken: '',
      date: new Date(),
      latitude: null,
      longitude: null,
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

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        })
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout:20000, maximumAge: 1000},
    )
  }

  static navigationOptions = {
    header: null
  }

  render (){
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <View>
          <Text style={styles.info}> Your Current Location Is: </Text>
          <Text>Latitude: {this.state.latitude}</Text>
          <Text>Longitude: {this.state.longitude}</Text>
        </View>
        <View>
          <Text style={styles.info}> View Archived Locations </Text>
          <DatePicker
            style={styles.dateField}
            date={this.state.date}
            mode="datetime"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-01-01"
            maxDate="2017-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({date: date})}}
          />
        </View>
        <Text style={styles.info}> Send Location </Text>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={
            () => sendLocation(this.state.userId, this.state.latitude, this.state.longitude, this.state.authToken)
          }
        >
          <Image
            style={styles.icon}
            source={require('../../images/location-send-icon.png')}
          />
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0DA8AD'
  },
  info: {
    color: '#FFF',
    marginTop: 10,
    opacity: 0.7,
    fontSize: 20,
    textAlign: 'center'
  },
  dateField: {
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 140,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    width: 140,
  }
})
