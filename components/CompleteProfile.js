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
  ActionSheetIOS,
  Platform
} from "react-native";

import styles from '../components/styles'

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Destruct", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class CompleteProfile extends Component {
  constructor() {
    super();
    this.state = {
      grupa: "10LF263",
      limba: "engleza"
    };
  }
  static navigationOptions = {
    title: "CompleteProfile"
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.identity}>
          <Image
            style={{ marginBottom: 20, height: 100, width: 120 }}
            source={require("../components/images/emblema.png")}
          />
        </View>

        <KeyboardAvoidingView behavior="padding" style={styles.buttons}>
          <TextInput
            style={{
              height: 40,
              color: "#0360BC",
              backgroundColor: "white",
              width: "80%",
              textAlign: "left",
              padding: 10,
              marginBottom: 30
            }}
            placeholder={"password".toUpperCase()}
            keyboardType="default"
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            style={{
              height: 40,
              color: "#0360BC",
              backgroundColor: "white",
              width: "80%",
              textAlign: "left",
              padding: 10,
              marginBottom: 30
            }}
            placeholder={"repeat password".toUpperCase()}
            keyboardType="default"
            onChangeText={text => this.setState({ text })}
          />

          <Text style={styles.dropdown} onPress={() => this.showActionSheet(this.state.grupa)}>
            {this.state.grupa}
          </Text>

          <Text style={styles.dropdown} onPress={() => this.showActionSheet(this.state.limba)}>
            {this.state.limba}
          </Text>

          <Button
            title="Finish"
            color="white"
            onPress={() => Alert.alert("Alerted")}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }

  showActionSheet(type) {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX
      },
      buttonIndex => {
        if (type == this.state.grupa)
          this.setState({ grupa: BUTTONS[buttonIndex] });
        else this.setState({ limba: BUTTONS[buttonIndex] });
      }
    );
  }
}

export default CompleteProfile;
