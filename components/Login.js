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
      showText: true
    };
  }
  static navigationOptions = {
    title: "Login"
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
          {this.state.showText && (
            <Text className="text" style={styles.title}>
              Universitatea Transilvania din Brasov
            </Text>
          )}

          <Text className="text" style={styles.title}>
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
          <TextInput
            style={styles.textInputStyle}
            placeholder={"password".toUpperCase()}
            underlineColorAndroid="transparent"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={text => this.setState({ text })}
            onFocus={() => this.toggleState}
          />
          <Button
            title="Login"
            color={Platform.OS == "ios" ? "white" : "#00b894"}
            style={styles.button}
            onPress={() => this.login(this.state.text)}
          />
        </KeyboardAvoidingView>

        <View style={styles.credits}>
          {/* <Button
            title="Register"
            color={Platform.OS == "ios" ? "white" : "#00b894"}
            onPress={() => navigate("Register")}
          /> */}
          <Text style={styles.title}>FEEDBACK STUDENT APP</Text>
        </View>
      </View>
    );
  }
  toggleState() {
    console.warn(this.state.showText);
    this.state.showText ? false : true;
    console.warn(this.state.showText);
  }
  login(user) {
    result = new RegExp("@student.unitbv.ro").test(user);
    const { navigate } = this.props.navigation;
    if (result) {
      axios
        .get(
          "http://wickedapp.azurewebsites.net/Account/StudentLogin/",
          {
            params: {
              email: user
            }
          }
        )
        .then(function(response) {
          //response validation
          navigate("Home")
        })
        .catch(function(error) {
          console.warn(error);
        });
    }
  }
}

export default Register;
