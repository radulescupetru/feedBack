import React, { Component } from 'react';
import { AppRegistry, Text,View,StyleSheet } from 'react-native';

import Login from '../feedBack/components/Login'
class App extends Component {
  render() {
    return (
      <Login/>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    alignItems:"center",
    justifyContent:"space-around",
    backgroundColor:"pink"
  },
  inner:{
    width:"80%",
    backgroundColor:"white",

  }
})
export default App;


