"use strict";

var React = require("react-native");

var { StyleSheet } = React;

module.exports = StyleSheet.create({
  page_wrapper: {
    backgroundColor: "#00b894",
    height: "100%",
    width: "100%"
  },
  header_image: {
    flex:0,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    height:"15%",
    width:"100%"
  },
  home_wrapper:{
    flex:5,
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    backgroundColor:"white"
  },
  story_wrapper:{
      flex:0,
      height:80,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
  },
  story_item:{
    height:70,
    width:70,
    borderRadius:35,
    margin:10,
    backgroundColor:"#00b894",
    alignItems:"center",
    justifyContent:"center"
  },
  schedule_wrapper:{
      flex:3,
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"space-around"
  },
  course_title:{
      fontSize:20,
      color:"white",
      fontWeight:"800"

  }
});
