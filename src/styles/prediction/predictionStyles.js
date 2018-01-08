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
    flexGrow: 1,
    paddingVertical: 20
  },
  info : {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 20
  },
  dateContainer: {
    flexDirection: 'row',
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default styles
