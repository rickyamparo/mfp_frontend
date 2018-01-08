import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09305B',
    alignItems: 'center'
  },
  infoContainer: {
    flexDirection: 'row',
    flexGrow: 1
  },
  dateContainer: {
    flexDirection: 'row',
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 15
  },
  dateField: {
    width: 200,
  },
  icon: {
    height: 140,
    width: 140,
  },
  iconContainer: {
    height: 140,
    width: 140,
  }
})

export default styles
