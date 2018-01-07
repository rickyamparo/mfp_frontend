import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

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
  responseText: {
    color: 'black',
    fontSize: 10,
    textAlignVertical: 'center'
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

export default styles
