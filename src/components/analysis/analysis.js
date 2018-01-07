import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text, AsyncStorage, StatusBar, Keyboard} from 'react-native';
import styles from '../../../src/styles/analysis/analysisStyles'

const getData = (user_id, auth_token, action) => {
  return fetch(`https://vast-wildwood-58678.herokuapp.com/api/v1/business_intelligence/${action}?user_id=${user_id}`, {
    headers: {
      Authorization: auth_token
    }
  })
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson
  })
}

export default class Analysis extends Component {

  constructor(props){
    super(props)
    this.state = {
      auth_token: '',
      user_id: ''
    }
  }

  componentDidMount = () => {
    AsyncStorage.getItem('auth_token')
    .then(async (token) => {
      await this.setState({'auth_token': token})
    })

    AsyncStorage.getItem('user_id')
    .then(async (id) => {
      await this.setState({'user_id': id})
    })
    .then(async () =>{
      return getData(this.state.user_id, this.state.auth_token, 'most_visited')
    })
    .then(async (most_visited) => {
      await this.setState({
        'mv_longitude': most_visited.coordinates.longitude,
        'mv_latitude': most_visited.coordinates.latitude,
        'mv_times_visited': most_visited.times_visited
      })
    })
    .then(async () =>{
      return getData(this.state.user_id, this.state.auth_token, 'least_visited')
    })
    .then(async (least_visited) => {
      await this.setState({
        'lv_longitude': least_visited.coordinates.longitude,
        'lv_latitude': least_visited.coordinates.latitude,
        'lv_times_visited': least_visited.times_visited
      })
    })
    .then(async () =>{
      return getData(this.state.user_id, this.state.auth_token, 'favorite_weekday')
    })
    .then(async (wkday_visited) => {
      await this.setState({
        'wday_longitude': wkday_visited.coordinates.longitude,
        'wday_latitude': wkday_visited.coordinates.latitude,
        'wday_times_visited': wkday_visited.times_visited
      })
    })
    .then(async () =>{
      return getData(this.state.user_id, this.state.auth_token, 'favorite_weekend')
    })
    .then(async (wkend_visited) => {
      await this.setState({
        'wend_longitude': wkend_visited.coordinates.longitude,
        'wend_latitude': wkend_visited.coordinates.latitude,
        'wend_times_visited': wkend_visited.times_visited
      })
    })
  }

  static navigationOptions = {
    header: null
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <Text style={styles.title}> Based on your Location History: </Text>
        <View style={styles.analyticRow}>

          <View style={styles.analyticQuery}>
            <Text style={styles.queryText}> Your most visited Location: </Text>
          </View>

          <View style={styles.analyticResponse}>
            <Text> Your Location was: {this.state.mv_longitude} by {this.state.mv_latitude} {"\n"} You visited this place {this.state.mv_times_visited} times </Text>
          </View>

        </View>

        <View style={styles.analyticRow}>

          <View style={styles.analyticQuery}>
            <Text style={styles.queryText}> Your least visited Location: </Text>
          </View>

          <View style={styles.analyticResponse}>
            <Text> Your Location was: {this.state.lv_longitude} by {this.state.lv_latitude} {"\n"} You visited this place {this.state.lv_times_visited} times </Text>
          </View>

        </View>

        <View style={styles.analyticRow}>

          <View style={styles.analyticQuery}>
            <Text style={styles.queryText}> Favorite spot during the week: </Text>
          </View>

          <View style={styles.analyticResponse}>
            <Text> Your Location was: {this.state.wday_longitude} by {this.state.wday_latitude} {"\n"} You visited this place {this.state.wday_times_visited} times </Text>
          </View>

        </View>

        <View style={styles.analyticRow}>

          <View style={styles.analyticQuery}>
            <Text style={styles.queryText}> Favorite spot during the weekend: </Text>
          </View>

          <View style={styles.analyticResponse}>
            <Text> Your Location was: {this.state.wend_longitude} by {this.state.wend_latitude} {"\n"} You visited this place {this.state.wend_times_visited} times </Text>
          </View>

        </View>

        <View style={styles.switchButton}>
          <Image
            style={styles.switchIcon}
            source={require('../../images/switch-icon.png')}
            />
        </View>
      </View>
    )
  }
}
