import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Button,
  Modal,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput
} from "react-native";

import styles from "../components/feedback_styles";
import constants from "../constants/Constants";
import axios from "axios";
export default class FeedBack extends Component {
  static navigationOptions = {
    title: "FeedBack"
  };
  constructor() {
    super();
    this.state = { selected: false, index: 0, redirect: false, visible: false, message:"" };
  }
  course = {
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
      feedback_type: "RigorousScientificLevel",
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
    }
  ];

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"FeedBack".toUpperCase()}</Text>
        <View style={styles.card}>
          <View style={styles.card_info}>
            <Text style={styles.card_text}>
              {params.teacher + "-" + params.class}
            </Text>
            <Text style={styles.card_text}>
              {new Date().toDateString().toLocaleUpperCase()}
            </Text>
          </View>
          <View style={styles.card_vote}>
            <View>
              <Text style={styles.card_text_dark}>
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
        <View style={styles.card_message}>
          <TouchableHighlight
            onPress={() => {
              this.setState({ visible: true });
            }}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../components/images/message.png")}
            />
          </TouchableHighlight>

          <Modal
            visible={this.state.visible}
            animationType={"slide"}
            transparent={true}
          >
            <View style={styles.modal_background}>
              <View style={styles.popup_styles}>
                <View style={styles.header}>
                  <Text style={styles.header_title}>
                    {"Enter your message...".toUpperCase()}
                  </Text>
                </View>
                <View style={styles.footer}>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder={"Enter your message...".toUpperCase()}
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    onChangeText={text => this.setState({ message:text })}
                    multiline={true}
                    blurOnSubmit={true}
                  />
                  <Button
                    color={"#18314F"}
                    title="Submit message"
                    onPress={() => {
                      this.setState({ visible: false });
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
  registerVote(grade, type) {
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
      this.votes.push({
        key: "ActualClass",
        value: 0
      });
      this.sendFeedBack(this.votes,this.state.message);
      console.log(this.state.message);
    }
  }
  sendFeedBack(complete_votes,message) {
    result = true;
    if (result) {
      axios
        .get("http://wickedapp.azurewebsites.net/Feedback/SubmitFeedback/", {
          params: {
            feedback: JSON.stringify(complete_votes)
          }
        })
        .then(function(response) {})
        .catch(function(error) {
          console.warn(error);
        });
    }
  }
}
