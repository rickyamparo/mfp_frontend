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
        <View style= {styles.infoContainer}>
          <Text style={styles.info}> Please select a date in the future. {'\n'} My Database will predict where you will be. </Text>
        </View>
        <View style= {styles.infoContainer}>
          <DatePicker
            date={this.state.date}
            mode="date"
            format="YYYY-MM-DD"
            minDate="2018-01-01"
            maxDate="2018-12-31"
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
        <View style= {styles.infoContainer}>
        </View>
      </View>
    )
  }
}
