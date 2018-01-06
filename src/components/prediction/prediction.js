import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage, StatusBar } from 'react-native';
import DatePicker from 'react-native-datepicker'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0DA8AD'
  },
  info : {
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
})
