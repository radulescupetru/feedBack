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

import styles from '../components/styles';
import ActionSheet from 'react-native-actionsheet'

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Destruct", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class CompleteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grupa: "10LF263",
      limba: "ENGLEZA",
      selected:" "
    };
    this.handlePress = this.handlePress.bind(this)
    this.showActionSheet = this.showActionSheet.bind(this)
  }
 
  handlePress(i) {
    this.setState({
      selected: i
    })
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
            style={{marginTop:-50, height: 70, width: 90 }}
            source={require("../components/images/emblema.png")}
          />
        </View>

        <KeyboardAvoidingView behavior="padding" style={styles.buttons}>
          <TextInput
            style={{
              height: 35,
              color: "#0360BC",
              backgroundColor: "white",
              width: "80%",
              textAlign: "left",
              padding: 10,
              marginBottom: 10
            }}
            placeholder={"password".toUpperCase()}
            keyboardType="default"
            secureTextEntry={true}
            underlineColorAndroid= 'transparent'
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            style={{
              height: 35,
              color: "#0360BC",
              backgroundColor: "white",
              width: "80%",
              textAlign: "left",
              padding: 10,
              marginBottom: 10
            }}
            placeholder={"repeat password".toUpperCase()}
            underlineColorAndroid= 'transparent'
            secureTextEntry={true}
            keyboardType="default"
            onChangeText={text => this.setState({ text })}
          />
          </KeyboardAvoidingView>
          <View style={styles.buttons}>
          <Text style={styles.dropdown} onPress={() => this.showActionSheet(this.state.grupa)}>
            {this.state.grupa}
          </Text>

          <Text style={styles.dropdown} onPress={() => this.showActionSheet(this.state.limba)}>
            {this.state.limba}
          </Text>

          <Button
            title="Finish"
            color={Platform.OS=="ios"?"white":"#00b894"}
            onPress={()=>navigate('Login')}
          />
          </View>
      </View>
    );
  }


  showActionSheet(type) {
    let platform = ActionSheet;
    if(Platform.OS==='ios')
      platform=ActionSheetIOS;

      platform.showActionSheetWithOptions(
        {
          options: BUTTONS,
          cancelButtonIndex: CANCEL_INDEX,
          destructiveButtonIndex: DESTRUCTIVE_INDEX
        },
        buttonIndex => {
          if (type == this.state.grupa)
            this.setState({ grupa: BUTTONS[buttonIndex].toUpperCase() });
          else this.setState({ limba: BUTTONS[buttonIndex].toUpperCase() });
        }
      );
    }
    
  }

export default CompleteProfile;
