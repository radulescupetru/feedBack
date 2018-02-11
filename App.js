import React, { Component } from 'react';
import { AppRegistry, Text,View,StyleSheet } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';



const App = StackNavigator({
  Register: { screen: Register },
  CompleteProfile: { screen: CompleteProfile }},
  {
   headerMode:"none"
  });
  

import Register from '../feedBack/components/Register'
import CompleteProfile from '../feedBack/components/CompleteProfile'

export default App;


