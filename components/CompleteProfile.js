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
  Platform,
  Picker
} from "react-native";

import styles from "../components/styles";

var BUTTONSiOS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class CompleteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grupa: "10LF263",
      limba: "ENGLEZA"
    };
  }
  static navigationOptions = {
    title: "CompleteProfile"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <View style={styles.identity}>
          <Image
            style={{ marginTop: -50, height: 70, width: 90 }}
            source={require("../components/images/emblema.png")}
          />
        </View>

        <KeyboardAvoidingView behavior="padding" style={styles.buttons}>
          <TextInput
            style={styles.textInputStyle}
            placeholder={"password".toUpperCase()}
            keyboardType="default"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder={"repeat password".toUpperCase()}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            keyboardType="default"
            onChangeText={text => this.setState({ text })}
          />
        </KeyboardAvoidingView>
        
        {Platform.OS === "ios" ? (
          <View style={styles.buttons}>
            <Text
              style={styles.dropdown}
              onPress={() => this.showActionSheet(this.state.grupa)}
            >
              {this.state.grupa}
            </Text>
            <Text
              style={styles.dropdown}
              onPress={() => this.showActionSheet(this.state.limba)}
            >
              {this.state.limba}
            </Text>
          </View>
        ) : (
          <View style={styles.buttons}>
            <Picker
              style={{ width: "80%" }}
              selectedValue={this.state.limba}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ limba: itemValue })
              }
            >
              <Picker.Item label="item" value="item1" />
              <Picker.Item label="item2" value="item2" />
            </Picker>
            <Picker
              style={{ width: "80%" }}
              selectedValue={this.state.grupa}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ grupa: itemValue })
              }
            >
              <Picker.Item label="item" value="item1" />
              <Picker.Item label="item2" value="item2" />
            </Picker>
          </View>
        )}

        <Button
          title="Finish"
          color={Platform.OS == "ios" ? "white" : "#00b894"}
          onPress={() => navigate("Login")}
        />
      </View>
    );
  }

  showActionSheet(type) {
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONSiOS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX
      },
      buttonIndex => {
        if (type == this.state.grupa)
          this.setState({ grupa: BUTTONSiOS[buttonIndex].toUpperCase() });
        else this.setState({ limba: BUTTONSiOS[buttonIndex].toUpperCase() });
      }
    );
  }
}

export default CompleteProfile;
