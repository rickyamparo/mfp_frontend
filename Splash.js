import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}> My Favorite Places </Text>
      </View>
        <Text style={styles.subtitle}>Powered by React Native </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#9b59b6',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 15
  },
  titleWrapper: {
    justifyContent: 'center',
    flex: 1
  }
})
