import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import styles from "../components/styles";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showText: true,
      user: "",
      pass: ""
    };
  }
  static navigationOptions = {
    title: "Login"
  };
  GLOBAL = require("./globals");
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
            onChangeText={text => this.setState({ user: text })}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder={"password".toUpperCase()}
            underlineColorAndroid="transparent"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={text => this.setState({ pass: text })}
            onFocus={() => this.toggleState}
          />
          <TouchableHighlight
            onPress={() => this.login(this.state.user, this.state.pass)}
          >
            <Text style={styles.button}>Login</Text>
          </TouchableHighlight>
          
        </KeyboardAvoidingView>
        <TouchableHighlight onPress={() => navigate("Register")}>
            <Text style={styles.button}>Register</Text>
          </TouchableHighlight>
        <View style={styles.credits}>
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
  login(user, pass) {
    let self = this;
    const { navigate } = this.props.navigation;
    axios
      .post("http://wickedapp.azurewebsites.net/Account/StudentLogin/", {
        email: user,
        password: pass
      })
      .then(function(response) {
        let res = response.data;
        console.log(response);
        if (res == -1) {
          Alert.alert(
            "Login failed",
            "Account not found, please register first",
            {
              cancelable: true
            }
          );
        } else if (res == 0) {
          Alert.alert(
            "Login failed",
            "Email has not been confirmed",
            [
              { text: "Resend", onPress: () => self.resendEmail(user) },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              }
            ],
            { cancelable: true }
          );
        } else {
          self.GLOBAL.userId = res;
          navigate("Home");
        }
      })
      .catch(function(error) {
        console.warn(error);
      });
  }
  resendEmail(user) {
    axios
      .post(
        "http://wickedapp.azurewebsites.net/Account/ResendConfirmationEmail",
        {
          email: user
        }
      )
      .then(function(response) {
        self.GLOBAL.userId = res;
        navigate("Home");
      })
      .catch(function(error) {
        console.warn(error);
      });
  }
}

export default Login;
