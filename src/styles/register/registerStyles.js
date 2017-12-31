import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09305B"
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  header: {
    color: '#FFF',
    marginTop: 5,
    textAlign: 'center',
    opacity: 0.7
  },
  info: {
    color: '#FFF',
    marginTop: 25,
    textAlign: 'center',
    width: 250,
    opacity: 0.7,
    fontSize: 20
  }
})

export default styles
