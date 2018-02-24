import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import styles from "../components/styles";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  static navigationOptions = {
    title: "Register"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <View style={styles.identity}>
          <Image
            style={{ marginBottom: 20, height: 70, width: 90 }}
            source={require("../components/images/emblema.png")}
          />
          <Text style={styles.title}>
            Universitatea Transilvania din Brasov
          </Text>
          <Text style={styles.title}>
            {"Facultatea de Matematica".toUpperCase() +
              "\n" +
              " si Informatica".toUpperCase()}
          </Text>
        </View>

        <KeyboardAvoidingView behavior="padding" style={styles.buttons}>
          <TextInput
            style={styles.textInputStyle}
            placeholder={"name@student.unitbv.ro".toUpperCase()}
            underlineColorAndroid="transparent"
            keyboardType="email-address"
            onChangeText={text => this.setState({ text })}
          />

          <Button
            title="Set your profile"
            color={Platform.OS == "ios" ? "white" : "#00b894"}
            // onPress={() => this.checkUser(this.state.text)}
            onPress={()=>navigate("Home")}
          />
        </KeyboardAvoidingView>

        <View style={styles.credits}>
          <Text style={{ color: "white" }}>{"FeedbackApp".toUpperCase()}</Text>
        </View>
      </View>
    );
  }
  validateEmail = email => {
    return false;
  };
  checkUser(user) {
    axios
      .get(
        "http://wickedwebapiweb20180214010303.azurewebsites.net/Account/CheckEmail",
        {
          params: {
            email: user
          }
        }
      )
      .then(function(response) {
        if (response.data == "True") {
          ()=>navigate("Home");
        }
      })
      .catch(function(error) {
        console.warn(error);
      });
  }
}

export default Register;
