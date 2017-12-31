import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text, AsyncStorage } from 'react-native';

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
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/home-icon.png')}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16a085'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  }
})
