import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text, AsyncStorage, StatusBar, Keyboard} from 'react-native';

const getMostVisited = (userId, authToken) => {
  return fetch(`https://vast-wildwood-58678.herokuapp.com/api/v1/business_intelligence/most_visited?user_id=${userId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authToken
    }
  })
  .then((response) => response.json())
  .then((responseJson) => {
    alert(responseJson)
  })
}

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
    }).then((response) =>{
      getMostVisited(this.state.userId, this.state.authToken)
    }).then((mostVisited) => {
      this.setState({'mostVisited': mostVisited})
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
          </View>

        </View>

        <View style={styles.analyticRow}>

          <View style={styles.analyticQuery}>
            <Text style={styles.queryText}> Your least visited Location: </Text>
          </View>

          <View style={styles.analyticResponse}>
          </View>

        </View>

        <View style={styles.analyticRow}>

          <View style={styles.analyticQuery}>
            <Text style={styles.queryText}> Favorite spot during the week: </Text>
          </View>

          <View style={styles.analyticResponse}>
          </View>

        </View>

        <View style={styles.analyticRow}>

          <View style={styles.analyticQuery}>
            <Text style={styles.queryText}> Favorite spot during the weekend: </Text>
          </View>

          <View style={styles.analyticResponse}>
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

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#09305B'
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    opacity: 0.7,
    fontSize: 20,
    textAlign: 'center'
  },
  analyticRow: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  analyticQuery: {
    backgroundColor: '#075473',
    flexDirection: 'row',
    flex: 1
  },
  queryText : {
    color: '#FFF',
    opacity: 0.7,
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  analyticResponse: {
    backgroundColor: '#0DA8AD',
    flexDirection: 'row',
    flex: 1
  },
  switchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  switchIcon: {
    width: 80,
    height: 80
  }
})
