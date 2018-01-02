import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, AsyncStorage, StatusBar } from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class LocationTracker extends Component {

  constructor(props){
    super(props)
    this.state = { authToken: ''}
    this.state = { date: new Date() }
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

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={
            () => alert('Location Sent')
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
  currentLocation: {
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
    width: 140
  },
  iconContainer: {
    alignItems: 'center',
    flexGrow: 1
  }
})
