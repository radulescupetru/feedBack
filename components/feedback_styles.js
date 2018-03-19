"use strict";

var React = require("react-native");
var { StyleSheet } = React;
import constants from "../constants/Constants";

module.exports = StyleSheet.create({
  feedback_info: {
    flex: 0,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: 150,
    padding: 10
  },
  card_text: {
    fontSize: 20,
    color:constants.text_color,
    fontWeight: "900",
    padding:10
  },
  card_text_description: {
    fontSize: 16,
    color: constants.text_color,
    padding:10
  },
  container: {
    flex: 1,
    justifyContent:"space-around",
    alignItems:"center"
  },
  card: {
    flex: -1,
    justifyContent: "center",
    backgroundColor: "white",
    height:"70%",
    width:"80%",
    borderRadius:15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3
  },
  card_info:{
    flex:1,
    alignItems:"flex-start",
    justifyContent:"center",
    backgroundColor:constants.primary_color,
    borderRadius:15,
    borderBottomEndRadius:0,
    borderBottomStartRadius:0
    
  },
  card_vote:{
    flex:3,
    alignItems:"center",
    justifyContent:"space-around",
    zIndex:2
  },
  title:{
    fontSize:18,
    fontWeight:"800",
    marginBottom:-100
  },
  button_container:{
      flex:1,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
  }
});
