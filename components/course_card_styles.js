"use strict";

var React = require("react-native");
var { StyleSheet } = React;
import constants from "../constants/Constants";

module.exports = StyleSheet.create({
  course_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10
  },
  text_wrapper: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    
  },
  text_styles:{
    textAlign: "left",
    color:constants.text_color,
    fontWeight: "bold",
    padding:2
  },
  border_style:{
    borderBottomColor: constants.text_color,
    borderBottomWidth: 1,
    width:"95%",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:0,
    marginBottom:0 
  }
});
