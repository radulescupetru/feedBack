import React, { Component } from 'react';
import { AppRegistry, Text,View,StyleSheet } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';



const App = StackNavigator({
 
  FeedBack:{screen:FeedBack},
  Login:{screen:Login},
  Register: { screen: Register },
  Home:{screen:Home},
  CompleteProfile: { screen: CompleteProfile }},  
  {
   headerMode:"none"
  });
  

import Register from '../feedBack/components/Register'
import Login from '../feedBack/components/Login'
import CompleteProfile from '../feedBack/components/CompleteProfile'
import Home from '../feedBack/components/HomePage'
import FeedBack from '../feedBack/components/FeedBack'

export default App;


