import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Button,
  ImageBackground
} from "react-native";

import EmojiFeedBack from "../components/EmojiFeedBack";
import styles from "../components/feedback_styles";
import constants from "../constants/Constants";
import axios from "axios";
export default class FeedBack extends Component {
  static navigationOptions = {
    title: "FeedBack"
  };
  constructor() {
    super();
    this.state = { selected: false, index: 0, redirect: false };
  }
  course = {
    teacher: "S.HOMANA".toUpperCase(),
    course: "GERMANA",
    day: require("../components/images/monday.jpg")
  };
  votes = [];
  feedBackTypes = [
    {
      key: 0,
      feedback_type: "Usefulness",
      feedback_desription:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea,"
    },
    {
      key: 1,
      feedback_type: "Novelty",
      feedback_desription:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea,"
    },
    {
      key: 2,
      feedback_type: "HighScientificLevel",
      feedback_desription:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea,"
    },
    {
      key: 3,
      feedback_type: "RigorousScrientificLevel",
      feedback_desription:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea,"
    },
    {
      key: 4,
      feedback_type: "Attractiveness",
      feedback_desription:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea,"
    },
    {
      key: 5,
      feedback_type: "Clearness",
      feedback_desription:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea,"
    },
    {
      key: 6,
      feedback_type: "Correctness",
      feedback_desription:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea,"
    },
    {
      key: 7,
      feedback_type: "Interactivity",
      feedback_desription:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea,"
    },
    {
      key: 8,
      feedback_type: "Comprehension",
      feedback_desription:
        "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea,"
    },
    {
      key: 9,
      feedback_type: "Finished",
      feedback_desription: "Thank you for your feedback!!!"
    }
  ];
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"FeedBack".toUpperCase()}</Text>
        <View style={styles.card}>
          <View style={styles.card_info}>
            <Text style={styles.card_text}>
              {this.course.teacher + "-" + this.course.course}
            </Text>
            <Text style={styles.card_text}>
              {new Date().toDateString().toLocaleUpperCase()}
            </Text>
          </View>
          <View style={styles.card_vote}>
            <View>
              <Text style={styles.card_text}>
                {this.feedBackTypes[this.state.index].feedback_type}
              </Text>
              <Text style={styles.card_text_description}>
                {this.feedBackTypes[this.state.index].feedback_desription}
              </Text>
            </View>
            <View style={styles.button_container}>
              <Button
                title="BAD"
                onPress={() =>
                  this.state.redirect
                    ? navigate("Home")
                    : this.registerVote(
                        "bad",
                        this.feedBackTypes[this.state.index].feedback_type
                      )
                }
              />
              <Button
                title="OK"
                onPress={() =>
                  this.state.redirect
                    ? navigate("Home")
                    : this.registerVote(
                        "ok",
                        this.feedBackTypes[this.state.index].feedback_type
                      )
                }
              />
              <Button
                title="GOOD"
                onPress={() =>
                  this.state.redirect
                    ? navigate("Home")
                    : this.registerVote(
                        "good",
                        this.feedBackTypes[this.state.index].feedback_type
                      )
                }
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
  registerVote(grade, type) {
    console.log(this.state.index + "--" + this.feedBackTypes.length);
    if (grade == "bad") {
      this.votes.push({
        key: type,
        value: 1
      });
    } else if (grade == "ok") {
      this.votes.push({
        key: type,
        value: 2
      });
    } else {
      this.votes.push({
        key: type,
        value: 3
      });
    }
    this.setState({
      index: this.state.index + 1
    });
    if (this.state.index === this.feedBackTypes.length - 2) {
      this.setState({
        redirect: true
      });
      this.sendFeedBack(this.votes);
    }
  }
  sendFeedBack(complete_votes){
    result=true;
    if (result) {
      axios
        .get(
          "http://wickedapp.azurewebsites.net/Feedback/SubmitFeedback/",
          {
            params: {
              feedback:JSON.stringify(complete_votes)
            }
          }
        )
        .then(function(response) {
          console.log(response.data)
          
        })
        .catch(function(error) {
          console.warn(error);
        });
    }
  }
}
