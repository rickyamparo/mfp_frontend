import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text, AsyncStorage, StatusBar } from 'react-native';

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

  render (){
    return (

      <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <Text style={styles.header}> A React Native App by Ricky Amparo</Text>

        <View style={styles.dashboardRow}>

          <View style={styles.dashboardIcon}>
            <Image
              style={styles.logo}
              source={require('../../images/location-icon.png')}
            />
            <Text style={styles.info}> Location Tracker </Text>
          </View>

          <View style={styles.dashboardIcon}>
            <Image
              style={styles.logo}
              source={require('../../images/read-mind.png')}
            />
            <Text style={styles.info}> Predict Location </Text>
          </View>

        </View>

        <View style={styles.dashboardRow}>

          <View style={styles.dashboardIcon}>
            <Image
              style={styles.logo}
              source={require('../../images/user-icon2.png')}
            />
            <Text style={styles.info}> User Account </Text>
          </View>

          <View style={styles.dashboardIcon}>
            <Image
              style={styles.logo}
              source={require('../../images/info-icon.png')}
            />
            <Text style={styles.info}> About MFP </Text>
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#075473'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  logo: {
    width: 120,
    height: 120
  },
  dashboardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    paddingVertical: 60
  },
  dashboardIcon: {
    width: 125,
    height: 125,
  },
  header: {
    color: '#FFF',
    marginTop: 5,
    textAlign: 'center',
    opacity: 0.7
  },
  info: {
    color: '#FFF',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.7,
    fontSize: 15
  }
})
