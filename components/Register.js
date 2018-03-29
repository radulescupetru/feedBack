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
      user: "",
      pass: "",
      fLang: ""
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
            onChangeText={text => this.setState({ user: text })}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder={"password".toUpperCase()}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            onChangeText={text => this.setState({ pass: text })}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder={"Foreign language".toUpperCase()}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ fLang: text })}
          />

          <Button
            title="Register account"
            color={Platform.OS == "ios" ? "white" : "#00b894"}
            onPress={() =>
              this.register(this.state.user, this.state.pass, this.state.fLang)
            }
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
  register(user, pass, fLang) {
    let self = this;
    const { navigate } = this.props.navigation;    
    axios
      .post("http://wickedapp.azurewebsites.net/Account/RegisterAsync", {
        email: user,
        password: pass,
        foreignLanguage: fLang
      })
      .then(function(response) {
        console.log(response);
        Alert.alert(
          "Complete registration",
          "Please confirm your email",
          [{ text: "OK", onPress: () => navigate("Login") }],
          { cancelable: false }
        );
      })
      .catch(function(error) {
        console.warn(error);
      });
  }
}

export default Register;
