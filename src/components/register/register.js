import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/home-icon.png')}
          />
          <Text style={styles.title}>Please Enter An Email and Password</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16a085"
  }
})
