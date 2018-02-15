"use strict";

var React = require("react-native");
var { StyleSheet } = React;
import constants from "../constants/Constants";

module.exports = StyleSheet.create({
  page_wrapper: {
    backgroundColor: constants.primary_color,
    flex: 1
  },
  header_image: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: constants.primary_color,
    paddingTop: 10
  },
  home_wrapper: {
    flex: 3,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "white"
  },
  story_wrapper: {
    flex: 0,
    height: 80,
    marginVertical: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  story_item: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    backgroundColor: constants.primary_color,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.34,
  },
  schedule_wrapper: {
    flex: 3,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.64,

  },
  card_style: {
    width: "90%",
    flex:1,
    backgroundColor: constants.primary_color,
    marginVertical:10
  },
  course_title: {
    fontSize: 20,
    color: "white",
    fontWeight: "800"
  }
});
