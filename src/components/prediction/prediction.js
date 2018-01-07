import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage, StatusBar } from 'react-native';
import DatePicker from 'react-native-datepicker'
import styles from '../../../src/styles/prediction/predictionStyles'

export default class Prediction extends Component {
  constructor(props){
    super(props)
    this.state = {
      authToken: '',
      date: new Date(),
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
        <StatusBar barStyle='light-content'/>
        <View>
          <Text style={styles.info}> Please select a date in the future. </Text>
          <Text style={styles.info}> My Database will predict where you will be. </Text>
          <DatePicker
            style={styles.dateField}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2017-12-31"
            maxDate="2020-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({date: date})}}
          />
        </View>
      </View>
    )
  }
}
