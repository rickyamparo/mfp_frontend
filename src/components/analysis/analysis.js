import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text, AsyncStorage, StatusBar, Keyboard} from 'react-native';

export default class Analysis extends Component {

  constructor(props){
    super(props)
    this.state = {
      authToken: '',
      userId: ''
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#09305B'
  }
})
