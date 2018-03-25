"use strict";

var React = require("react-native");
var { StyleSheet,Dimensions } = React;
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
  popup_styles:{
    height:"50%",
    width:"80%",
    borderRadius:15,
    backgroundColor:"white",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-around"
  },
  header:{
    flex:1,
    width:"100%",
    backgroundColor:constants.primary_color,
    alignItems:"center",
    justifyContent:"center",
    borderTopStartRadius:15,
    borderTopEndRadius:15
  },
  footer:{
    flex:3,
    width:"100%",
    alignItems:"center",
    justifyContent:"space-around"
  },
  modal_background:{
    height:"100%",
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"rgba(0,0,0,0.8)",
  },
  card_text: {
    fontSize: 20,
    color:constants.text_color,
    fontWeight: "900",
    padding:10
  },
  card_text_description: {
    fontSize: 16,
    color: constants.text_color_dark,
    padding:10
  },
  card_text_dark:{
    fontSize: 20,
    color: constants.text_color_dark,
    padding:10,
    fontWeight:"900"
  },
  container: {
    flex: 1,
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:constants.feedback_color
  },
  card_message:{
    position:"absolute",
    bottom:30,
    left:(Dimensions.get('window').width / 2) - 35,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:constants.primary_color,
    borderRadius:35,
    height:70,
    width:70,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.5    
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
  header_title:{
    fontSize:18,
    fontWeight:"800",
    color:constants.text_color
  },
  button_container:{
      flex:1,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
  },
  textInputStyle:{
    height:100,
    width:"80%",
    padding:5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 0.2,
    shadowOpacity: 0.2 ,
    fontSize:14 
  }
});
