import React, { Component } from 'react';
import { AppRegistry, Text,View,StyleSheet } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';



const App = StackNavigator({
  Home:{screen:Home},
  Login:{screen:Login},
  Register: { screen: Register },
  CompleteProfile: { screen: CompleteProfile }},
  {
   headerMode:"none"
  });
  

import Register from '../feedBack/components/Register'
import Login from '../feedBack/components/Login'
import CompleteProfile from '../feedBack/components/CompleteProfile'
import Home from '../feedBack/components/HomePage'

export default App;


