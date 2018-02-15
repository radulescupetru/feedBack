"use strict";

var React = require("react-native");
var { StyleSheet } = React;
import constants from '../constants/Constants'

module.exports = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "80%",
    backgroundColor:constants.primary_color
  },
  title: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
  identity: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    flex: 1,
    marginTop: -50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%"
  },
  dropdown: {
    height: 35,
    color: "#ccc",
    backgroundColor: "white",
    width: "80%",
    textAlign: "left",
    padding: 10,
    marginBottom: 10
  },
  textInputStyle: {
    height: 35,
    color: "#0360BC",
    backgroundColor: "white",
    width: "80%",
    textAlign: "left",
    padding: 10,
    marginBottom: 10
  }
});
