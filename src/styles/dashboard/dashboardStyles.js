import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

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

export default styles
