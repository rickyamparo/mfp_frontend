import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text, AsyncStorage, StatusBar, Keyboard} from 'react-native';
import styles from '../../../src/styles/dashboard/dashboardStyles'

export default class Dashboard extends Component {

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

  static navigationOptions = {
    header: null
  }

  render (){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <Text style={styles.header}> A React Native App by Ricky Amparo</Text>

        <View style={styles.dashboardRow}>

          <View style={styles.dashboardIcon}>
            <TouchableOpacity
              style={styles.locationButton}
              onPress={
                () => navigate('LocationTracker')
              }
            >
              <Image
                style={styles.logo}
                source={require('../../images/location-icon-white.png')}
              />
              <Text style={styles.info}> Location Tracker </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dashboardIcon}>
            <TouchableOpacity
              style={styles.locationButton}
              onPress={
                () => navigate('Prediction')
              }
            >
              <Image
                style={styles.logo}
                source={require('../../images/read-mind-white.png')}
                />
                <Text style={styles.info}> Predict Location </Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.dashboardRow}>

          <View style={styles.dashboardIcon}>
            <TouchableOpacity
              style={styles.locationButton}
              onPress={
                () => navigate('Analysis')
              }
            >
              <Image
                style={styles.logo}
                source={require('../../images/analysis-icon-white.png')}
              />
            <Text style={styles.info}> Data Analysis </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dashboardIcon}>
            <Image
              style={styles.logo}
              source={require('../../images/about-icon-white.png')}
            />
            <Text style={styles.info}> About MFP </Text>
          </View>

        </View>
      </View>
    )
  }
}
