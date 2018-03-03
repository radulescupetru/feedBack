"use strict";

var React = require("react-native");
var { StyleSheet } = React;
import constants from "../constants/Constants";

module.exports = StyleSheet.create({
  page_wrapper: {
    backgroundColor: constants.primary_color,
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  header_image: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: constants.primary_color,
    paddingTop: 10
  },
  card_wrapper: {
    flex: 0,
    borderRadius:10,
    backgroundColor: "white",
    width:"90%",
    height:"70%",
    alignItems:"center",
    justifyContent:"space-around",
  },
  stacked_card:{
    position:"absolute",
    borderRadius:10,
    backgroundColor:"white",
    opacity:0.7,
    bottom:35,
    width:"80%",
    height:"15%"
  },
  card_content:{
    flex:3,
    alignItems:"center",
    justifyContent:"space-around"
  },
  text_wrapper:{
    flex:0,
    alignItems:"flex-start",
    justifyContent:"center",
    height:"50%"
  },
  card_description:{
    fontSize:16,
    opacity:0.8,
    fontWeight:"600",
    color:constants.text_color,
  },
  card_text:{
    fontSize:16,
    opacity:0.8,
    fontWeight:"600",
    color:constants.primary_color,
    textAlign:"left",
    paddingBottom:10
  },
  emoji:{
    flex:3
  }
});
