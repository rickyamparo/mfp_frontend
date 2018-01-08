import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage, StatusBar } from 'react-native';
import DatePicker from 'react-native-datepicker'
import sendLocation from '../../../src/fetch/createLocation'
import styles from '../../../src/styles/locationTracker/locationTrackerStyles'

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
      async (position) => {
        await this.setState({
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
        <View style={styles.infoContainer}>
          <Text style={styles.info}> Your Current Location Is: {"\n"} {this.state.longitude} by {this.state.latitude} </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.info}> View Archived Locations </Text>
        </View>
        <View style={styles.dateContainer}>
          <DatePicker
            date={this.state.date}
            mode="date"
            format="YYYY-MM-DD"
            minDate="2017-01-01"
            maxDate="2017-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={
              {dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36,
              },
              dateText: {
                color: '#FFF'
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.info}> Send Location </Text>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => sendLocation(this.state.userId, this.state.latitude, this.state.longitude, this.state.authToken)}
          >
            <Image
              style={styles.icon}
              source={require('../../images/location-send-icon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
