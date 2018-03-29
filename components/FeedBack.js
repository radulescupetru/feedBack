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
  TextInput,
} from "react-native";

import styles from "../components/feedback_styles";
import constants from "../constants/Constants";
import axios from "axios";

const { classId } = 0
export default class FeedBack extends Component {
  static navigationOptions = {
    title: "FeedBack",
    gesturesEnabled: false

  };
  constructor() {
    super();
    this.state = {
      selected: false,
      index: 0,
      redirect: false,
      visible: false,
      message: "",
      classId:0
   
    };
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
        "Do you think you will make use of what you learned today?"
    },
    {
      key: 1,
      feedback_type: "Novelty",
      feedback_desription:
        "How much of the information presented today was new to you?"
    },
    {
      key: 2,
      feedback_type: "HighScientificLevel",
      feedback_desription:
        "Do you think the course material was understandable by someone with medium skills in this topic?"
    },
    {
      key: 3,
      feedback_type: "RigorousScientificLevel",
      feedback_desription:
        "Do you think the course material was diving too deep into the topics?"
    },
    {
      key: 4,
      feedback_type: "Attractiveness",
      feedback_desription:
        "How much you enjoyed taking this course?"
    },
    {
      key: 5,
      feedback_type: "Clearness",
      feedback_desription:
        "Was the course material clear enought for you to grasp?"
    },
    {
      key: 6,
      feedback_type: "Correctness",
      feedback_desription:
        "Did you indentify any mistakes in what was presented to you in class?"
    },
    {
      key: 7,
      feedback_type: "Interactivity",
      feedback_desription:
        "What was the interaction of the teacher with the students?"
    },
    {
      key: 8,
      feedback_type: "Comprehension",
      feedback_desription:
        "How much of the course material did you understand enought to not recap the subjects?"
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
              <Text style={{opacity:0}} >{classId=params.classId})}</Text>
            </View>
            <View style={styles.button_container}>
              <Button
                title="NO"
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
                title="NOT SURE"
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
                title="YES"
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
                    value={this.state.message}
                    onChangeText={text => this.setState({ message: text })}
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
    console.log(this.state.index + "--" + (this.feedBackTypes.length - 1));
    if (this.state.index == this.feedBackTypes.length - 1) {
      this.setState({
        redirect: true
      });
      this.votes.push({
        key: "ClassId",
        value: classId
      });
      this.sendFeedBack(this.votes, this.state.message);
      console.log(this.votes);
    } else {
      this.setState({
        index: this.state.index + 1
      });
    }
  }
  sendFeedBack(complete_votes, message) {
    result = true;
    console.log(message);
    if (result) {
      axios
        .get("http://wickedapp.azurewebsites.net/Feedback/SubmitFeedback/", {
          params: {
            feedback: JSON.stringify(complete_votes),
            message: message
          }
        })
        .then(function(response) {})
        .catch(function(error) {
          console.warn(error);
        });
    }
  }
}
